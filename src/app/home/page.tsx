"use client"; // Import required modules from React and Next.js
import React, { useEffect, useState } from "react";

type Comment = {
    id: number; // Assuming there's an ID
    name: string;
    email: string;
};

// This is the main component for the Home page
export default function HomePage() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((userData: Comment[]) => {
            setComments(userData.map(({ id, name, email }) => ({ id, name, email })));
        })
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

