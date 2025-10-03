
# ETL-Job-Monitor

# 📊🔄 ETL Job Monitor

[![Python](https://img.shields.io/badge/python-v3.11+-blue.svg)](https://www.python.org/downloads/)
[![React Native](https://img.shields.io/badge/React_Native-0.72+-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-009688.svg)](https://fastapi.tiangolo.com/)
[![Pandas](https://img.shields.io/badge/Pandas-2.0+-150458.svg)](https://pandas.pydata.org/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0+-D71F00.svg)](https://www.sqlalchemy.org/)
[![SQLite](https://img.shields.io/badge/SQLite-3.40+-003B57.svg)](https://www.sqlite.org/)

> **Control your data pipelines from anywhere** - Start, monitor, and manage ETL jobs remotely with real-time progress tracking, comprehensive logging, and instant notifications on your mobile device.

## 🎯 Overview

ETL Job Monitor is a powerful cross-platform mobile application that brings enterprise-grade data pipeline management to your fingertips. Built with React Native and powered by FastAPI, it enables data engineers and analysts to trigger, monitor, and control ETL jobs from anywhere, with real-time status updates, progress tracking, and detailed execution logs.

### 🌟 Key Features

- **🚀 Remote Job Execution**: Start and stop ETL jobs from your mobile device
- **📱 Cross-Platform**: Native iOS and Android apps built with React Native and TypeScript
- **⚡ Real-Time Monitoring**: Live progress updates with WebSocket integration
- **📊 Visual Analytics**: Job performance metrics and execution history dashboards
- **🔔 Smart Notifications**: Push alerts for job completions, failures, and anomalies
- **🔍 Advanced Logging**: Detailed execution logs with filtering and search capabilities
- **📈 Data Preview**: Sample data preview from extraction results
- **🔐 Secure API Integration**: JWT authentication with role-based access control
- **💾 Job History**: Complete audit trail with execution statistics
- **⏱️ Scheduled Jobs**: Cron-style job scheduling with timezone support
- **🔄 Retry Logic**: Automatic retry mechanisms with exponential backoff
- **📤 Export Capabilities**: Download job results and logs in multiple formats

## 🎬 Demo & Screenshots

### 📺 YouTube Demo

> **[Watch the Complete Demo on YouTube](https://youtube.com/your-demo-link)**

### 🖼️ App Screenshots

| Job Dashboard | Real-Time Progress |
|:-------------:|:------------------:|
| ![Dashboard](docs/images/dashboard-screen.png) | ![Progress](docs/images/progress-screen.png) |

| Job Details | Execution Logs |
|:-----------:|:--------------:|
| ![Details](docs/images/details-screen.png) | ![Logs](docs/images/logs-screen.png) |

## 🚀 Quick Start

### Prerequisites

- **Python 3.11+** with pip
- **Node.js 18+** with npm
- **React Native CLI** or **Expo CLI**
- **SQLite 3.40+** (included with Python)
- **Redis 7+** (optional, for job queue management)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/etl-job-monitor.git
cd etl-job-monitor
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your configurations
nano .env
```

### 3. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Initialize database
python -m alembic upgrade head

# Start FastAPI server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 4. Mobile App Setup

```bash
cd mobile-app
npm install

# iOS setup
cd ios && pod install && cd ..

# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### 5. Access the Application

- 📱 **Mobile App**: Launch on your device/simulator
- 🔧 **Backend API**: http://localhost:8000
- 📖 **API Documentation**: http://localhost:8000/docs
- 📊 **OpenAPI Schema**: http://localhost:8000/redoc

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Mobile Layer                          │
├─────────────────────────────────────────────────────────────┤
│  React Native iOS/Android  │  TypeScript Services           │
│  WebSocket Client          │  Push Notifications            │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                      API Gateway                             │
├─────────────────────────────────────────────────────────────┤
│  FastAPI REST API    │  JWT Authentication                  │
│  Rate Limiting       │  WebSocket Server                    │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                       Job Engine                             │
├─────────────────────────────────────────────────────────────┤
│  Job Scheduler       │  ETL Orchestrator                    │
│  Data Extractors     │  Transform Pipeline                  │
│  Data Loaders                                                │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                       Data Layer                             │
├─────────────────────────────────────────────────────────────┤
│  SQLite - Jobs DB    │  Pandas DataFrames                   │
│  Redis - Job Queue   │  File Storage                        │
└─────────────────────────────────────────────────────────────┘
```

### Tech Stack

#### Mobile Application

- **React Native**: Cross-platform mobile framework
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Screen routing and navigation
- **Axios**: HTTP client for API calls
- **Socket.IO Client**: Real-time WebSocket communication
- **React Native Push Notifications**: Job status alerts
- **Recharts Native**: Data visualization and charts
- **AsyncStorage**: Local data persistence

#### Backend Services

- **FastAPI**: Modern Python web framework with async support
- **SQLAlchemy**: SQL toolkit and ORM
- **Alembic**: Database migration management
- **Pandas**: Data manipulation and analysis
- **SQLite**: Lightweight embedded database
- **Pydantic**: Data validation and serialization
- **python-jose**: JWT token handling
- **websockets**: Real-time bidirectional communication

#### Data Processing

- **Pandas**: DataFrame operations and transformations
- **Requests**: HTTP library for API data extraction
- **BeautifulSoup4**: HTML/XML parsing for web scraping
- **PyArrow**: Parquet file format support
- **openpyxl**: Excel file processing
- **SQLAlchemy Core**: Database operations

#### Infrastructure

- **SQLite**: Job metadata and execution history
- **Redis**: Optional job queue and caching
- **Uvicorn**: ASGI server for FastAPI
- **Nginx**: Reverse proxy (production)

## 📊 ETL Job Architecture

### Job Execution Pipeline

```python
# Example ETL job workflow
from app.services.etl import ETLJob, DataExtractor, DataTransformer, DataLoader

# Define ETL job
job = ETLJob(
    name="daily_sales_import",
    description="Import and transform daily sales data"
)

# 1. Extract data from source
extractor = DataExtractor(source_type="api", config={
    "url": "https://api.example.com/sales",
    "method": "GET",
    "headers": {"Authorization": "Bearer token"}
})
raw_data = await extractor.extract()

# 2. Transform data
transformer = DataTransformer(rules=[
    {"action": "filter", "column": "status", "value": "completed"},
    {"action": "rename", "mapping": {"customer_id": "client_id"}},
    {"action": "aggregate", "by": ["date"], "metrics": {"sales": "sum"}}
])
transformed_data = transformer.transform(raw_data)

# 3. Load to destination
loader = DataLoader(destination_type="sqlite", config={
    "table": "sales_summary",
    "if_exists": "append"
})
result = await loader.load(transformed_data)
```

### Supported Data Sources

#### 1. API Extraction

```python
# REST API configuration
{
  "type": "api",
  "endpoint": "https://api.example.com/data",
  "method": "GET",
  "headers": {"Authorization": "Bearer token"},
  "params": {"date": "2025-01-01"},
  "pagination": {
    "type": "offset",
    "page_size": 100
  }
}
```

#### 2. Database Sources

- **PostgreSQL**: Direct database connections
- **MySQL**: Table and query-based extraction
- **SQLite**: Local database files
- **SQL Server**: Enterprise database support

#### 3. File Sources

- **CSV**: Comma-separated values
- **Excel**: XLSX/XLS file formats
- **Parquet**: Columnar storage format
- **JSON**: Structured JSON data

#### 4. Web Scraping

- HTML parsing with BeautifulSoup
- Dynamic content with Selenium (optional)
- Custom scraping rules

### Transformation Capabilities

```python
OPERATIONS = [
    "filter",           # Filter rows by condition
    "select",           # Select specific columns
    "rename",           # Rename columns
    "cast",             # Change data types
    "aggregate",        # Group and aggregate
    "join",             # Merge datasets
    "pivot",            # Reshape data
    "derive",           # Create calculated columns
    "clean",            # Data cleaning operations
    "validate"          # Data quality checks
]
```

### Job Status Lifecycle

```
PENDING → RUNNING → COMPLETED
                ↓
              FAILED
                ↓
            RETRYING → RUNNING
                ↓
             CANCELLED
```

## 📈 Real-Time Monitoring

### WebSocket Integration

```typescript
// Mobile app WebSocket connection
import io from 'socket.io-client';

const socket = io('http://localhost:8000', {
  auth: {
    token: jwtToken
  }
});

// Subscribe to job updates
socket.on('job_progress', (data) => {
  console.log(`Job ${data.job_id}: ${data.progress}%`);
  updateProgress(data.job_id, data.progress);
});

socket.on('job_status', (data) => {
  console.log(`Job ${data.job_id} status: ${data.status}`);
  updateJobStatus(data.job_id, data.status);
});

socket.on('job_log', (data) => {
  console.log(`[${data.level}] ${data.message}`);
  appendLog(data.job_id, data);
});
```

### Progress Tracking

```python
# Backend progress emission
class JobExecutor:
    async def execute_job(self, job_id: str):
        total_steps = 5
        
        # Step 1: Initialize
        await self.emit_progress(job_id, 0, "Initializing job...")
        
        # Step 2: Extract
        await self.emit_progress(job_id, 20, "Extracting data...")
        data = await self.extract_data()
        
        # Step 3: Transform
        await self.emit_progress(job_id, 50, "Transforming data...")
        transformed = await self.transform_data(data)
        
        # Step 4: Load
        await self.emit_progress(job_id, 80, "Loading data...")
        await self.load_data(transformed)
        
        # Step 5: Complete
        await self.emit_progress(job_id, 100, "Job completed successfully")
```

### Performance Metrics

```python
class JobMetrics:
    job_id: str
    start_time: datetime
    end_time: datetime
    duration_seconds: float
    rows_extracted: int
    rows_transformed: int
    rows_loaded: int
    throughput_rows_per_sec: float
    memory_peak_mb: float
    cpu_usage_percent: float
```

## 🔍 Job Management Features

### Job Creation

```typescript
// Create new ETL job
interface JobConfig {
  name: string;
  description: string;
  source: DataSourceConfig;
  transformations: TransformationRule[];
  destination: DestinationConfig;
  schedule?: CronSchedule;
  notifications: NotificationSettings;
}

const createJob = async (config: JobConfig) => {
  const response = await api.post('/api/v1/jobs', config);
  return response.data.job;
};
```

### Job Scheduling

```python
# Cron-style scheduling
class JobSchedule:
    cron_expression: str  # "0 2 * * *" - Run at 2 AM daily
    timezone: str         # "America/New_York"
    enabled: bool
    next_run: datetime
    
# Example schedules
schedules = {
    "hourly": "0 * * * *",
    "daily_2am": "0 2 * * *",
    "weekly_monday": "0 3 * * 1",
    "monthly_first": "0 0 1 * *"
}
```

### Job Controls

- **Start Job**: Trigger immediate execution
- **Stop Job**: Gracefully terminate running job
- **Restart Job**: Stop and start with same config
- **Clone Job**: Duplicate job configuration
- **Delete Job**: Remove job and history
- **Enable/Disable Schedule**: Control automatic execution

## 📱 Mobile App Features

### Dashboard View

- **Active Jobs**: Current running jobs with progress bars
- **Job Queue**: Pending jobs waiting for execution
- **Recent Completions**: Last 10 completed jobs
- **Quick Stats**: Success rate, avg duration, total runs
- **System Health**: API status, queue depth, error rate

### Job Details Screen

- **Configuration**: View source, transformations, destination
- **Execution Log**: Real-time log streaming with filtering
- **Metrics**: Performance statistics and charts
- **Data Preview**: Sample rows from extraction/transformation
- **Actions**: Start, stop, clone, edit, delete

### Notification Settings

```typescript
// Configure push notifications
interface NotificationConfig {
  on_completion: boolean;
  on_failure: boolean;
  on_long_running: {
    enabled: boolean;
    threshold_minutes: number;
  };
  on_retry: boolean;
  channels: ('push' | 'email' | 'sms')[];
}
```

## 📋 API Documentation

### Core Endpoints

#### Create Job

```http
POST /api/v1/jobs
Content-Type: application/json
Authorization: Bearer {jwt_token}

Body:
{
  "name": "daily_sales_etl",
  "description": "Extract and transform daily sales data",
  "source": {
    "type": "api",
    "config": {
      "url": "https://api.example.com/sales",
      "method": "GET"
    }
  },
  "transformations": [
    {
      "action": "filter",
      "column": "status",
      "value": "completed"
    }
  ],
  "destination": {
    "type": "sqlite",
    "table": "sales_processed"
  }
}

Response:
{
  "job_id": "uuid-string",
  "name": "daily_sales_etl",
  "status": "created",
  "created_at": "2025-01-15T10:30:00Z"
}
```

#### Start Job

```http
POST /api/v1/jobs/{job_id}/start
Authorization: Bearer {jwt_token}

Response:
{
  "execution_id": "uuid-string",
  "job_id": "uuid-string",
  "status": "running",
  "started_at": "2025-01-15T10:30:00Z"
}
```

#### Get Job Status

```http
GET /api/v1/jobs/{job_id}/status
Authorization: Bearer {jwt_token}

Response:
{
  "job_id": "uuid-string",
  "status": "running",
  "progress_percent": 45,
  "current_step": "transforming",
  "rows_processed": 15000,
  "estimated_completion": "2025-01-15T10:35:00Z"
}
```

#### Get Job Logs

```http
GET /api/v1/jobs/{job_id}/logs?level=INFO&limit=100
Authorization: Bearer {jwt_token}

Response:
{
  "logs": [
    {
      "timestamp": "2025-01-15T10:30:05Z",
      "level": "INFO",
      "message": "Started data extraction",
      "details": {}
    }
  ]
}
```

#### Stop Job

```http
POST /api/v1/jobs/{job_id}/stop
Authorization: Bearer {jwt_token}

Response:
{
  "job_id": "uuid-string",
  "status": "cancelled",
  "stopped_at": "2025-01-15T10:32:00Z",
  "rows_processed": 8500
}
```

#### List Jobs

```http
GET /api/v1/jobs?status=running&limit=20&offset=0
Authorization: Bearer {jwt_token}

Response:
{
  "total": 45,
  "jobs": [
    {
      "job_id": "uuid",
      "name": "daily_sales_etl",
      "status": "running",
      "progress": 65,
      "created_at": "2025-01-15T10:00:00Z"
    }
  ]
}
```

## 🔧 Configuration

### Environment Variables

```bash
# FastAPI Configuration
APP_NAME=ETL Job Monitor
APP_VERSION=1.0.0
ENVIRONMENT=production
DEBUG=false
API_PREFIX=/api/v1

# Server Settings
HOST=0.0.0.0
PORT=8000
WORKERS=4
RELOAD=false

# Database
DATABASE_URL=sqlite:///./etl_jobs.db
DATABASE_POOL_SIZE=10
DATABASE_MAX_OVERFLOW=20

# Security
SECRET_KEY=your-super-secret-key-change-this-in-production
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ALGORITHM=HS256
JWT_EXPIRATION_MINUTES=1440
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Redis (Optional)
REDIS_URL=redis://localhost:6379/0
REDIS_PASSWORD=
USE_REDIS_QUEUE=true

# Job Settings
MAX_CONCURRENT_JOBS=5
JOB_TIMEOUT_MINUTES=60
JOB_RETRY_ATTEMPTS=3
JOB_RETRY_DELAY_SECONDS=300

# Data Processing
PANDAS_CHUNKSIZE=10000
MAX_ROWS_PREVIEW=100
ENABLE_DATA_VALIDATION=true

# Logging
LOG_LEVEL=INFO
LOG_FILE=logs/etl_monitor.log
LOG_ROTATION=daily
LOG_RETENTION_DAYS=30

# WebSocket
WEBSOCKET_PING_INTERVAL=30
WEBSOCKET_PING_TIMEOUT=10

# Rate Limiting
RATE_LIMIT_PER_MINUTE=100
RATE_LIMIT_PER_HOUR=1000

# Notifications
ENABLE_PUSH_NOTIFICATIONS=true
NOTIFICATION_PROVIDER=firebase
FIREBASE_CREDENTIALS_PATH=./firebase-credentials.json
```

### Job Configuration Template

```yaml
# config/job_template.yaml

job:
  name: "example_etl_job"
  description: "Example ETL job configuration"
  
  source:
    type: "api"
    config:
      url: "https://api.example.com/data"
      method: "GET"
      headers:
        Authorization: "Bearer ${API_TOKEN}"
      params:
        date: "{{ today }}"
      pagination:
        type: "offset"
        page_size: 1000
        
  transformations:
    - action: "filter"
      column: "status"
      operator: "equals"
      value: "active"
      
    - action: "rename"
      mapping:
        old_column: "new_column"
        
    - action: "cast"
      columns:
        amount: "float"
        date: "datetime"
        
    - action: "aggregate"
      group_by: ["category", "date"]
      metrics:
        amount: "sum"
        count: "count"
        
  destination:
    type: "sqlite"
    config:
      table: "processed_data"
      if_exists: "append"
      
  schedule:
    cron: "0 2 * * *"
    timezone: "UTC"
    enabled: true
    
  notifications:
    on_completion: true
    on_failure: true
    channels: ["push", "email"]
    
  retry:
    max_attempts: 3
    delay_seconds: 300
    backoff_multiplier: 2
```

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd backend
pytest tests/ -v --cov=app --cov-report=html

# Mobile app tests
cd mobile-app
npm test -- --coverage --watchAll=false

# Integration tests
pytest tests/integration/ -v

# E2E tests
npm run test:e2e
```

### Test Coverage

- **Backend**: >85% code coverage
- **Mobile App**: >80% component coverage
- **Integration**: API endpoint testing
- **E2E**: Critical job execution flows

## 📦 Deployment

### Docker Production Deployment

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=sqlite:///./data/etl_jobs.db
      - REDIS_URL=redis://redis:6379/0
    volumes:
      - ./data:/app/data
      - ./logs:/app/logs
    depends_on:
      - redis
    restart: unless-stopped
    
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped
    
volumes:
  redis_data:
```

### Mobile App Deployment

#### iOS App Store

```bash
cd mobile-app/ios

# Build release version
xcodebuild -workspace ETLJobMonitor.xcworkspace \
           -scheme ETLJobMonitor \
           -configuration Release \
           archive -archivePath build/ETLJobMonitor.xcarchive

# Upload to App Store Connect
xcodebuild -exportArchive \
           -archivePath build/ETLJobMonitor.xcarchive \
           -exportPath build \
           -exportOptionsPlist ExportOptions.plist
```

#### Google Play Store

```bash
cd mobile-app/android

# Build release APK
./gradlew assembleRelease

# Build app bundle
./gradlew bundleRelease

# Sign and align
zipalign -v -p 4 app-release-unsigned.apk app-release.apk
apksigner sign --ks release-key.jks app-release.apk
```

### Health Checks & Monitoring

```bash
# Backend health check
curl http://localhost:8000/health

# Response
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "active_jobs": 3,
  "queued_jobs": 5,
  "uptime_seconds": 86400
}
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/etl-job-monitor.git
cd etl-job-monitor

# Create feature branch
git checkout -b feature/your-feature-name

# Set up development environment
./scripts/setup-dev.sh

# Install pre-commit hooks
pre-commit install

# Make changes and test
npm run lint
npm run test
npm run type-check

# Commit changes
git add .
git commit -m "feat: add awesome feature"

# Push and create pull request
git push origin feature/your-feature-name
```

### Code Standards

- **Python**: Black formatting, flake8 linting, type hints required
- **TypeScript**: ESLint, Prettier, strict mode enabled
- **Testing**: Maintain >80% test coverage
- **Documentation**: Update docs for new features
- **Commits**: Follow conventional commits specification

### Pull Request Process

1. Update README.md with details of changes
2. Update the CHANGELOG.md with notable changes
3. Ensure all tests pass and coverage is maintained
4. Request review from at least one maintainer
5. Squash commits before merging

## 🔍 Use Cases

### Data Engineering

- **Pipeline Monitoring**: Monitor complex data pipelines remotely
- **On-Call Management**: Quickly respond to job failures
- **Ad-Hoc Runs**: Trigger special data processing runs
- **Debugging**: Review logs and metrics for troubleshooting

### Business Analytics

- **Report Generation**: Schedule and monitor report generation
- **Data Warehouse Loading**: Manage ETL to data warehouse
- **API Data Collection**: Extract data from external APIs
- **Data Quality Checks**: Run validation jobs on datasets

### DevOps Integration

- **CI/CD Pipelines**: Trigger data processing in deployment pipelines
- **System Monitoring**: Track data processing health
- **Alerting**: Get notified of processing issues
- **Performance Tracking**: Monitor job execution metrics

### Personal Projects

- **Web Scraping**: Schedule and monitor scraping jobs
- **Data Aggregation**: Collect data from multiple sources
- **Backup Automation**: Schedule data backup jobs
- **API Integration**: Sync data between services

## 📊 Performance & Scalability

### System Specifications

- **Job Processing**: 50+ concurrent jobs
- **Data Throughput**: 100K+ rows per second
- **API Response**: <100ms average latency
- **WebSocket Latency**: <50ms real-time updates
- **Concurrent Users**: 500+ simultaneous users
- **Job History**: Unlimited with archiving

### Optimization Features

- **Chunked Processing**: Process large datasets in chunks
- **Parallel Execution**: Multi-threaded transformation
- **Connection Pooling**: Reuse database connections
- **Caching**: Redis for frequently accessed data
- **Lazy Loading**: On-demand data loading in mobile app
- **Database Indexing**: Optimized query performance

### Performance Benchmarks

```python
# Average processing times
{
  "api_extraction": "500ms per 1000 rows",
  "transformation": "200ms per 10000 rows",
  "database_load": "1s per 50000 rows",
  "job_startup": "100ms average",
  "websocket_latency": "30ms average"
}
```

## 🛡️ Security & Privacy

### Data Protection

- **Encryption at Rest**: SQLite database encryption
- **Encryption in Transit**: TLS 1.3 for all API communications
- **Authentication**: JWT with refresh token rotation
- **Authorization**: Role-based access control (RBAC)
- **Audit Logging**: Complete activity tracking

### Security Features

- **Input Validation**: Sanitization of all user inputs
- **SQL Injection Prevention**: Parameterized queries via SQLAlchemy
- **XSS Protection**: Content Security Policy headers
- **CSRF Protection**: Token-based validation
- **Rate Limiting**: Prevent abuse and DOS attacks
- **API Key Management**: Secure credential storage

## 🚨 Monitoring & Alerts

### Real-time Monitoring

- **Job Metrics**: Track execution time, success rate, throughput
- **System Metrics**: CPU, memory, disk usage
- **API Metrics**: Request rate, latency, error rate
- **Queue Metrics**: Job queue depth, processing rate

### Alerting Rules

```yaml
alerts:
  - name: "job_failure_rate_high"
    condition: "failure_rate > 0.1"
    threshold: 10
    severity: "critical"
    
  - name: "job_duration_anomaly"
    condition: "duration > avg_duration * 2"
    threshold: 2.0
    severity: "warning"
    
  - name: "queue_depth_high"
    condition: "queue_depth > 50"
    threshold: 50
    severity: "warning"
```

## 📝 License

```
Copyright (c) 2025 MonteyAI LLC. All rights reserved.

This software and associated documentation files (the "Software") are proprietary 
to MonteyAI LLC and are protected by copyright law.

VIEWING PERMITTED: This code is available for viewing, educational, and 
evaluation purposes only.

RESTRICTIONS:
- No commercial use without explicit written permission from MonteyAI LLC
- No redistribution, modification, or derivative works
- No reverse engineering or decompilation
- No use in production environments without valid license

For licensing inquiries: smontecinos@monteyai.com
```

## 🙏 Acknowledgments

- **FastAPI Team**: For the excellent async web framework
- **React Native Community**: For the amazing mobile framework
- **Pandas Developers**: For the powerful data manipulation library
- **SQLAlchemy Team**: For the robust ORM toolkit
- **Open Source Contributors**: For inspiration and collaboration

## 📞 Support & Contact

- **Email**: smontecinos@monteyai.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/etl-job-monitor/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/etl-job-monitor/discussions)

## 📈 Roadmap

### Q1 2025

- [x] Core job execution engine
- [x] React Native mobile apps (iOS/Android)
- [x] Real-time WebSocket monitoring
- [x] Basic scheduling functionality
- [x] JWT authentication

### Q2 2025

- [ ] Advanced data validation rules
- [ ] Job dependency management
- [ ] Custom transformation plugins
- [ ] Multi-user collaboration features
- [ ] Enhanced error recovery mechanisms

### Q3 2025

- [ ] Machine learning-based anomaly detection
- [ ] Predictive job duration estimates
- [ ] Auto-scaling job execution
- [ ] Advanced analytics dashboard
- [ ] Integration marketplace

### Q4 2025

- [ ] Enterprise SSO integration
- [ ] Advanced RBAC with teams
- [ ] Data lineage tracking
- [ ] Compliance reporting
- [ ] Multi-cloud support

---

**Built with ❤️ by MonteyAI LLC**

*Empowering data engineers to manage pipelines from anywhere*
