export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await  params
  return (
    <div className="text-3xl font-bold">User ID : {id}</div>
  )
}