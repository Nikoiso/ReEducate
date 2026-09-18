const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

const getOrCreateConversation = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const otherUserId = req.params.userId;

    if (currentUserId.equals(otherUserId)) {
      return res.status(400).json({
        message: "You cannot create a conversation with yourself",
      });
    }

    let conversation = await Conversation.findOne({
      participants: {
        $all: [currentUserId, otherUserId],
      },
    }).populate("participants", "name username avatar");

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [currentUserId, otherUserId],
      });

      conversation = await Conversation.findById(
        conversation._id
      ).populate("participants", "name username avatar");
    }

    res.json(conversation);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({
      participants: req.user._id,
    })
      .populate("participants", "name username avatar")
      .sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const conversation = await Conversation.findById(
      req.params.conversationId
    );

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    const isParticipant = conversation.participants.some((id) =>
      id.equals(req.user._id)
    );

    if (!isParticipant) {
      return res.status(403).json({
        message: "You are not part of this conversation",
      });
    }

    const messages = await Message.find({
      conversation: req.params.conversationId,
    })
      .populate("sender", "name username avatar")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        message: "Message cannot be empty",
      });
    }

    const conversation = await Conversation.findById(
      req.params.conversationId
    );

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    const isParticipant = conversation.participants.some((id) =>
      id.equals(req.user._id)
    );

    if (!isParticipant) {
      return res.status(403).json({
        message: "You are not part of this conversation",
      });
    }

    const message = await Message.create({
      conversation: conversation._id,
      sender: req.user._id,
      text: text.trim(),
    });

    await Conversation.findByIdAndUpdate(conversation._id, {
      updatedAt: new Date(),
    });

    const populatedMessage = await Message.findById(message._id).populate(
      "sender",
      "name username avatar"
    );

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const markMessageAsRead = async (req, res) => {
  try {
    const message = await Message.findById(req.params.messageId);

    if (!message) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    const conversation = await Conversation.findById(
      message.conversation
    );

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    const isParticipant = conversation.participants.some((id) =>
      id.equals(req.user._id)
    );

    if (!isParticipant) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    message.read = true;

    await message.save();

    res.json({
      message: "Message marked as read",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getOrCreateConversation,
  getConversations,
  getMessages,
  sendMessage,
  markMessageAsRead,
};