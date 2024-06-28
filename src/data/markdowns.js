const markdowns = {
    // 
    1: {
        markdownText:`
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
        `
    },
    2:{
        markdownText:` 
        `
    }
}


export default markdowns;
 