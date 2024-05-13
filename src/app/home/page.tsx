"use client";
import React, { useEffect, useState } from "react";

type Comment = {
    id: number;
    name: string;
    email: string;
};

// API response structure type declaration
type ApiResponse = Comment[];

export default function HomePage() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                // Cast the response JSON to the ApiResponse type
                const userData: ApiResponse = await response.json() as ApiResponse;
                setComments(userData.map(({ id, name, email }) => ({ id, name, email })));
            } catch (error) {
                console.error('Failed to fetch comments:', error);
                // Optionally, handle the error by updating component state
            }
        };

        void fetchComments();
    }, []);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.name} - {comment.email}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}
