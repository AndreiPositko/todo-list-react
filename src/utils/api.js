const BASE = 'http://localhost:3030';

export const api = {
    getTodo: async (id) => {
        try {
            const todo = await fetch(`${BASE}/todo/${id}`).then((result) => result.json());
            return todo;
        } catch (error) {
            console.warn(error);
        }
    },
    getTodos: async () => {
        try {
            const todos = await fetch(`${BASE}/todo`).then((result) => result.json());
            return todos;
        } catch (error) {
            console.warn(error);
        }
    },
    deleteTodo: async (id) => {
        try {
            const deleteTodo = fetch(`${BASE}/todo/${id}`, {
                method: 'DELETE'
            }).then((result) => result.json());
            return deleteTodo;
        } catch (error) {
            console.warn(error);
        }
    },
    createTodo: async (data) => {
        try {
            const createTodo = await fetch(`${BASE}/todo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data),
            }).then((result) => result.json());
            return createTodo;
        } catch (error) {
            console.warn(error);
        }
    },
    editTodo: async (data) => {
        try {
            const editTodo = await fetch(`${BASE}/todo/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            }).then((result) => result.json());
            return editTodo;
        } catch (error) {
            console.warn(error);
        }
    }
}