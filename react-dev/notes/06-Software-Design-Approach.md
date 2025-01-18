# Monolithic / Micro-Frontend Service / useEffect() hook / Basics of CORS Policy

## PART 1
### 1. Monolithic Architecture - Traditional Software Design Approach
- In this approach, all components of an application are tightly integrated into a single unit or codebase.

### 2. Micro-Frontend Architecture - Modern Software Design Approach
- Follows the SRP principle (Separation of Concerns), where each microservice performs its specific function independently.
- Each microservice can be written in different languages, such as React, Angular, Python, Node.js, etc.
- Each microservice may be deployed on different port numbers, and all these ports can be mapped to a domain name.
- ### How do these microservices communicate with each other?
  
## PART - 2
### 1. useEffect ()
    - display shimmer UI

### 2. CORS Policy
CORS (Cross-Origin Resource Sharing) is a mechanism that allows web applications running at one origin (domain) to request resources from a different origin. This is particularly important when you're working with React in the frontend and trying to make API requests to a server that resides on a different domain.

By default, browsers block requests from one origin (e.g., http://localhost:3000) to a different origin (e.g., https://api.example.com) unless the target server explicitly allows it via CORS headers.

## PART - 3
1. Search Fuctionality Implementation


**Note:** React renders fastly [because of its renders lifecycle] - One of the best characteristics of React

## LEARN MORE
Allow CORS Chrome Extension - just to bypass CORS termporarily