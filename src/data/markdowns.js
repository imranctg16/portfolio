const markdowns = {
  // rabbitmq markdown
  6: {
    markdownText: `
# Order Processing System

This project demonstrates a microservice architecture for an order processing system using Laravel, RabbitMQ, and MySQL. The system consists of two services: a Producer service for creating products and a Consumer service for managing inventory.

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Visualization](#visualization)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases a basic implementation of microservices using RabbitMQ for message brokering between two Laravel services: the Producer service and the Consumer service. When a new product is created in the Producer service, a message is sent to RabbitMQ, which the Consumer service then processes to update its inventory.

## Architecture

- **Producer Service:** Manages product creation and sends messages to RabbitMQ when a product is created.
- **Consumer Service:** Listens to RabbitMQ for new product messages and updates the inventory accordingly.
- **RabbitMQ:** Acts as the message broker between the Producer and Consumer services.
- **MySQL:** Used as the database for both services to store product and inventory information.

## Visualization

\`\`\`mermaid
graph TD
    A[Producer Service]
    B[Consumer Service]
    C[RabbitMQ]
    D[MySQL]

    A -->|Sends Product Created Message| C
    C -->|Delivers Message| B
    B -->|Updates Inventory| D
\`\`\`

## Prerequisites

- PHP >= 7.4
- Composer
- Laravel
- RabbitMQ
- MySQL
- Docker (optional, for containerization)

## Setup

### Clone the Repository

\`\`\`bash
git clone https://github.com/yimranctg16/rabbitmq-microservice.git
cd rabbitmq-microservice
\`\`\`

### Set Up Environment Variables

Copy the example environment files and update the configurations as needed.

\`\`\`bash
cp ProducerService/.env.example ProducerService/.env
cp ConsumerService/.env.example ConsumerService/.env
\`\`\`

### Install Dependencies

Navigate to each service directory and install the dependencies.

\`\`\`bash
cd ProducerService
composer install
cd ../ConsumerService
composer install
\`\`\`

### Run Migrations

Run the database migrations to set up the schema.

\`\`\`bash
cd ProducerService
php artisan migrate
cd ../ConsumerService
php artisan migrate
\`\`\`

### Start RabbitMQ

Make sure RabbitMQ is running. You can use Docker to start a RabbitMQ instance.

\`\`\`bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
\`\`\`

### Configure RabbitMQ

Ensure the queues and exchanges are set up correctly. This can be done manually via the RabbitMQ management interface or programmatically within the services.

## Usage

### Running the Producer Service

Start the Laravel development server for the Producer service.

\`\`\`bash
cd ProducerService
php artisan serve
\`\`\`

### Running the Consumer Service

Start the Laravel development server for the Consumer service.

\`\`\`bash
cd ConsumerService
php artisan serve
\`\`\`

### Creating a Product

Send a POST request to the Producer service to create a new product.

\`\`\`http
POST /api/products
Content-Type: application/json

{
    "name": "Sample Product",
    "price": 29.99,
    "quantity": 100
}
\`\`\`

### Consuming Messages

Run the RabbitMQ consumer command in the Consumer service.

\`\`\`bash
cd ConsumerService
php artisan rabbitmq:consume
\`\`\`

## Testing

### Unit Tests

Run the unit tests for each service.

\`\`\`bash
cd ProducerService
php artisan test
cd ../ConsumerService
php artisan test
\`\`\`

## Future Improvements

- Implement authentication and authorization.
- Add more detailed logging and monitoring.
- Improve error handling and retry mechanisms for message processing.
- Use Docker Compose for easier setup and management of the services and RabbitMQ.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to update the documentation and tests as needed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
        `,
  },
  // regulatory compliance management markdown
  1: {
    markdownText: ` 

#### Project Overview

Working as a technical lead on a regulatory compliance management project was both fulfilling and challenging. The project's features, such as policy management, compliance monitoring, and risk assessment, were carefully crafted to meet intricate regulatory requirements.

#### Key Features

1. **Policy Management**: Development and enforcement of policies in line with regulatory standards.
2. **Compliance Monitoring**: Continuous tracking and assessment of compliance metrics.
3. **Risk Assessment**: Identifying and evaluating risks to ensure regulatory adherence.
4. **Tailored Dashboard**: A bespoke dashboard for CEOs and CXOs, offering real-time insights into compliance metrics and regulatory updates.

#### Architecture

The project is designed as a monolithic application with a frontend built using Vue.js and a backend powered by Laravel 8.0.

**Key Components:**
- **Frontend**: Vue.js
- **Backend**: Laravel 8.0
- **Database**: MySQL (or any other relational database supported by Laravel)
- **API Communication**: RESTful API

#### Architecture Diagram

Below is a basic architecture diagram of the project:

\`\`\`mermaid
graph TD;
    A[User] -->|HTTP Requests| B[Vue.js Frontend]
    B -->|API Calls| C[Laravel 8.0 Backend]
    C -->|SQL Queries| D[(Database)]
\`\`\`

- **User**: Interacts with the system through the Vue.js frontend.
- **Vue.js Frontend**: Handles the user interface and makes API calls to the backend.
- **Laravel 8.0 Backend**: Processes the business logic, interacts with the database, and provides APIs for the frontend.
- **Database**: Stores all the data related to policies, compliance metrics, and risk assessments.

#### Challenges and Approach

Despite its minimalist appearance, the project demanded profound logical depth, particularly in areas like regulatory change management. Each feature, from policy enforcement to risk assessment, required meticulous attention to detail and alignment with regulatory standards. This complexity underscored the importance of a strategic approach to navigating regulatory landscapes.

#### Technical and Strategic Integration

The experience of working on this project was rewarding, blending technical expertise with strategic vision to drive regulatory excellence. As a technical lead, orchestrating the integration of various features into a cohesive system was both stimulating and impactful. It showcased the intersection of technology and regulatory compliance, offering valuable insights into organizational integrity and governance.

Overall, the project highlighted the critical role of technology in ensuring compliance and maintaining robust regulatory frameworks within organizations.
`,
  },
  2: {
    markdownText: `

#### Project Overview

In our project, we executed a pivotal shift from a monolithic architecture to a microservices model, introducing greater agility and scalability to our systems. This transition enabled seamless communication between components and facilitated the implementation of an API Gateway, streamlining interactions across the ecosystem. Additionally, we engineered a bespoke central method-based authorization system, ensuring robust security measures were in place to safeguard sensitive data and regulate access effectively.

#### Key Features

1. **Microservices Architecture**: Transition from a monolithic architecture to a microservices model for better scalability and agility.
2. **API Gateway**: Implemented to streamline interactions across the ecosystem.
3. **Central Method-based Authorization System**: Engineered for robust security measures to safeguard sensitive data and regulate access effectively.

#### Development and Impact

At the heart of our endeavor was the development of a multi-vendor workflow engine, meticulously crafted with Laravel on the backend and Vue.js on the frontend. Leading a small, dedicated team, we navigated the complexities of the project, guiding its progression from conception to implementation. As a testament to our collective efforts, the project yielded a remarkable 30% increase in efficiency, underscoring its transformative impact on our organization's operations.

#### Architecture

The project features a microservices architecture with the following key components:

- **Frontend**: Vue.js
- **Backend**: Laravel
- **API Gateway**: Facilitates communication between microservices
- **Authorization System**: Central method-based system for security

#### Architecture Diagram

Below is a basic architecture diagram of the project:

\`\`\`mermaid
graph TD;
    A[User] -->|HTTP Requests| B[Vue.js Frontend]
    B -->|API Calls| C[API Gateway]
    C -->|Routes Requests| D[Service 1]
    C -->|Routes Requests| E[Service 2]
    C -->|Routes Requests| F[...]
    D -->|SQL Queries| G[(Database 1)]
    E -->|SQL Queries| H[(Database 2)]
    F -->|SQL Queries| I[(Database ...)]
\`\`\`

- **User**: Interacts with the system through the Vue.js frontend.
- **Vue.js Frontend**: Handles the user interface and makes API calls to the API Gateway.
- **API Gateway**: Routes requests to the appropriate microservices.
- **Service 1**: Processes requests routed by the API Gateway and interacts with its own database.
- **Service 2**: Processes requests routed by the API Gateway and interacts with its own database.
- **...**: Represents additional services that process requests and interact with their own databases.
- **Database 1**: Stores data related to Service 1.
- **Database 2**: Stores data related to Service 2.
- **Database ...**: Stores data related to other services.
`,
  },
  3: {
    markdownText: `
### Integrated ERP Solution

#### Project Overview

Create an integrated ERP solution with over 10 modules, including HRM, PMS, Accounting, RMS, and Training, to streamline business processes and enhance organizational efficiency.

#### Key Features

1. **HRM (Human Resource Management)**: Manage employee information, payroll, attendance, and more.
2. **PMS (Project Management System)**: Track project progress, allocate resources, and manage timelines.
3. **Accounting**: Handle financial transactions, generate reports, and ensure compliance with accounting standards.
4. **RMS (Resource Management System)**: Manage company resources, inventory, and procurement.
5. **Training**: Organize training programs, track employee progress, and manage training materials.

#### Contributions and Achievements

1. **Development and Implementation**: Contributed to the development of a Laravel-based ERP solution, employing a modular monolith architectural approach. Over a span of more than two years, focused on designing and implementing key modules such as Accounting, Training, HRM, and the Vehicle Module.
2. **Support and Guidance**: Provided support and guidance on other essential modules, collaborating closely with the team to optimize system architecture and performance.
3. **Shaping the Evolution**: Played a vital role in shaping the ERP solution's evolution by leveraging expertise and experience to create a robust platform that streamlined business processes and enhanced operational efficiency.

#### Architecture

The project is designed as a monolithic application with a frontend built using Vue.js and a backend powered by Laravel 8.0.

**Key Components:**
- **Frontend**: Vue.js
- **Backend**: Laravel 8.0
- **Database**: MySQL (or any other relational database supported by Laravel)
- **API Communication**: RESTful API

#### Architecture Diagram

Below is a basic architecture diagram of the project:

\`\`\`mermaid
graph TD;
    A[User] -->|HTTP Requests| B[Vue.js Frontend]
    B -->|API Calls| C[Laravel 8.0 Backend]
    C -->|SQL Queries| D[(Database)]
\`\`\`

- **User**: Interacts with the system through the Vue.js frontend.
- **Vue.js Frontend**: Handles the user interface and makes API calls to the backend.
- **Laravel 8.0 Backend**: Processes the business logic, interacts with the database, and provides APIs for the frontend.
- **Database**: Stores all the data related to the ERP modules.
    `,
  },
  4: {
    markdownText: `

#### Project Overview

The JWT Token project focuses on implementing JWT token-based authentication to demonstrate user authentication and token assignment for secure data exchange between frontend and backend systems. Additionally, it facilitates the acquisition of refresh tokens to address token expiration, ensuring uninterrupted access to resources and enhancing system reliability.

#### Key Features

1. **JWT Token-based Authentication**: Implementation to enable user authentication and token assignment.
2. **Token Refresh Mechanism**: Facilitates the acquisition of refresh tokens to handle token expiration.
3. **Frontend and Backend Interaction**: Demonstrates secure data exchange between Vue.js frontend and Laravel backend using JWT tokens.

#### Project Scope

The project serves as a simple demonstration of JWT token functionality, showcasing how tokens are generated, authenticated, and refreshed to maintain secure and reliable access to resources.

#### Architecture Diagram

Below is a basic architecture diagram of the JWT Token project:

\`\`\`mermaid
graph TD;
    A[User] -->|HTTP Requests with JWT| B[Vue.js Frontend]
    B -->|JWT Tokens| C[Laravel Backend]
    C -->|Validates Tokens| A
\`\`\`

- **User**: Interacts with the system through the Vue.js frontend.
- **Vue.js Frontend**: Handles the user interface and manages JWT tokens for authentication.
- **Laravel Backend**: Validates JWT tokens received from the frontend and processes business logic.
    `},
    5: {
      markdownText: `
### Coding Practice and LeetCode Sessions

#### Overview

Lately, I've been deep into LeetCode problem-solving and Python practice sessions. It's been a mix of challenge and fun, diving into coding puzzles and brushing up on Python techniques. Whether it's optimizing algorithms or tackling tricky Python exercises, each session brings new insights and skills to the table. It's all about the journey of improvement, one problem at a time!

#### Experience and Learning

These coding sessions have been a great way to stay sharp and explore different problem-solving strategies. From dynamic programming to data structures, each LeetCode challenge and Python exercise adds a layer of understanding to my coding toolkit. It's a casual yet rewarding way to level up my coding game while enjoying the process of learning and growing as a coder.
      `}
};

export default markdowns;
