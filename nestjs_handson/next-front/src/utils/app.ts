export async function getAllPosts(){
    const response = await fetch("http://localhost:60001/posts");
    const data = await response.json();
    return data;
}

export async function getPostById(id: string){
    const response = await fetch(`http://localhost:60001/posts/${id}`);
    const data = await response.json();
    return data;
}
