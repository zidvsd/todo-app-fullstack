const endpoint = import.meta.env.VITE_API_BASE_URL;
export const handlePost = async (todo, refetch) => {
  try {
    const res = await fetch(`${endpoint}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo,
        completed: false,
      }),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    await res.json();
    refetch();
  } catch (error) {
    console.log(error);
  }
};
export const handleDelete = async (id, refetch) => {
  try {
    const res = await fetch(`${endpoint}/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    await res.json();
    refetch();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
