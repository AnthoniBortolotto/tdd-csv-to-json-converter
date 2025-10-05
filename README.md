# CSV to JSON Converter

A robust NestJS-based microservice that converts CSV data to JSON format using Test-Driven Development (TDD) principles.

## 🚀 Features

- **CSV to JSON Conversion**: Convert CSV strings to JSON objects
- **Input Validation**: Comprehensive validation using class-validator
- **RESTful API**: Clean REST API with proper HTTP status codes
- **Docker Support**: Containerized application with multi-stage builds
- **Kubernetes Ready**: Complete K8s deployment configurations
- **Health Checks**: Built-in health monitoring
- **TypeScript**: Fully typed application with strict type checking

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Docker (for containerization)
- Kubernetes cluster (for deployment)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tdd-csv-to-json-converter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run start:dev
   # or
   npm run start:dev
   ```

The application will be available at `http://localhost:3000`

## 📖 API Documentation

### Convert CSV to JSON

**Endpoint:** `POST /api/v1/csv-converter/convert`

**Request Body:**
```json
{
  "csv": "name,age,city\nJohn,25,New York\nJane,30,Los Angeles"
}
```

**Response:**
```json
[
  {
    "name": "John",
    "age": "25",
    "city": "New York"
  },
  {
    "name": "Jane", 
    "age": "30",
    "city": "Los Angeles"
  }
]
```

**Validation Rules:**
- `csv` field is required and cannot be empty
- Must be a valid string containing CSV data
- Must match CSV format pattern (comma-separated values with newlines)

## 🧪 Testing

Run the test suite:

```bash
# Unit tests
pnpm run test

# Watch mode
pnpm run test:watch

# Coverage report
pnpm run test:cov

# E2E tests
pnpm run test:e2e
```

## 🐳 Docker

### Build the Docker image

```bash
pnpm run build:docker
```

### Run with Docker

```bash
docker run -p 3000:3000 lordofthe/csv-to-json-converter:latest
```

### Docker Compose

```bash
docker-compose up -d
```

## ☸️ Kubernetes Deployment

### Deploy to Kubernetes

1. **Apply the deployment**
   ```bash
   kubectl apply -f k8s/deployment.yml
   ```

2. **Apply the service**
   ```bash
   kubectl apply -f k8s/service.yml
   ```

3. **Check deployment status**
   ```bash
   kubectl get pods
   kubectl get services
   ```

### Access the Service

The service is exposed as a NodePort. Get the external port:

```bash
kubectl get service csv-to-json-converter-k8s-service
```

Access via: `http://localhost:<NodePort>/api/v1/csv-converter/convert`

## 🏗️ Project Structure

```
src/
├── csv-converter/
│   └── v1/
│       ├── controllers/          # API controllers
│       ├── services/            # Business logic
│       ├── dtos/                # Data Transfer Objects
│       ├── interfaces/          # TypeScript interfaces
│       └── modules/             # NestJS modules
├── app.module.ts                # Root application module
└── main.ts                      # Application entry point

k8s/
├── deployment.yml               # Kubernetes deployment
└── service.yml                  # Kubernetes service

docker-compose.yml               # Docker Compose configuration
Dockerfile                       # Multi-stage Docker build
```

## 🔧 Available Scripts

- `pnpm run build` - Build the application
- `pnpm run start` - Start the application
- `pnpm run start:dev` - Start in development mode with hot reload
- `pnpm run start:debug` - Start in debug mode
- `pnpm run start:prod` - Start in production mode
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier
- `pnpm run test` - Run unit tests
- `pnpm run test:e2e` - Run end-to-end tests
- `pnpm run build:docker` - Build Docker image
- `pnpm run push` - Push Docker image to registry

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Application port | `3000` |
| `NODE_ENV` | Environment mode | `development` |

## 🚨 Error Handling

The application includes comprehensive error handling:

- **Validation Errors**: Returns 400 Bad Request for invalid input
- **Server Errors**: Returns 500 Internal Server Error for processing failures
- **Empty Data**: Handles empty CSV data gracefully

## 📝 Example Usage

### Using curl

```bash
curl -X POST http://localhost:3000/api/v1/csv-converter/convert \
  -H "Content-Type: application/json" \
  -d '{
    "csv": "product,price,stock\nLaptop,999,10\nMouse,25,50"
  }'
```

### Using JavaScript/TypeScript

```typescript
const response = await fetch('http://localhost:3000/api/v1/csv-converter/convert', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    csv: 'name,email\nJohn,john@example.com\nJane,jane@example.com'
  })
});

const result = await response.json();
console.log(result);
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the UNLICENSED License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Built with ❤️ using NestJS, TypeScript, and TDD principles**
