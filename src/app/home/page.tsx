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
        // Define an async function inside the useEffect
        const fetchComments = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                const userData: Comment[] = await response.json();
                setComments(userData.map(({ id, name, email }) => ({ id, name, email })));
            } catch (error) {
                console.error('Failed to fetch comments:', error);
                // Handle errors, e.g., by setting an error state or logging
            }
        };
    
        // Call the async function
        fetchComments();
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

