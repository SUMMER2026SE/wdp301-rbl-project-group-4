# VibeHue Backend

Backend của VibeHue được xây dựng bằng NestJS 11 và TypeScript. Hiện tại project đang ở trạng thái skeleton: có module gốc, endpoint mặc định `GET /`, cấu trúc thư mục cho `users` module và các lớp dùng chung để tiếp tục phát triển.

## Yêu Cầu

- Node.js >= 20
- npm

> NestJS 11 yêu cầu Node.js từ phiên bản 20 trở lên.

## Cách Chạy Backend

Di chuyển vào thư mục backend:

```bash
cd backend
```

Cài dependencies:

```bash
npm install
```

Chạy môi trường development có hot reload:

```bash
npm run start:dev
```

Mặc định server chạy tại:

```text
http://localhost:3000
```

Kiểm tra nhanh API mặc định:

```bash
curl http://localhost:3000
```

Kết quả mong đợi:

```text
Hello World!
```

Nếu muốn đổi port, đặt biến môi trường `PORT` trước khi chạy app:

```bash
PORT=5000 npm run start:dev
```

Trên PowerShell:

```powershell
$env:PORT=5000
npm run start:dev
```

## Cách Chạy Production

Build project:

```bash
npm run build
```

Chạy bản đã build:

```bash
npm run start:prod
```

Lệnh `start:prod` sẽ chạy file entry đã compile tại `dist/main.js`.

## Lệnh Hữu Ích

```bash
# Chạy app một lần, không watch
npm run start

# Development mode, tự động reload khi code thay đổi
npm run start:dev

# Debug mode
npm run start:debug

# Build ra thư mục dist/
npm run build

# Format code trong src/ và test/
npm run format

# Lint và tự động fix lỗi có thể fix
npm run lint

# Chạy unit test
npm run test

# Chạy unit test ở watch mode
npm run test:watch

# Chạy test coverage
npm run test:cov

# Chạy e2e test
npm run test:e2e
```

## Cấu Trúc Backend

```text
backend/
├── src/
│   ├── main.ts                    # Entry point, tạo Nest app và listen theo PORT hoặc 3000
│   ├── app.module.ts              # Module gốc của ứng dụng
│   ├── app.controller.ts          # Controller mặc định, hiện có GET /
│   ├── app.service.ts             # Service mặc định, trả về "Hello World!"
│   ├── app.controller.spec.ts     # Unit test cho AppController
│   │
│   ├── config/                    # Nơi đặt cấu hình app, env, database, third-party service
│   │
│   ├── core/                      # Thành phần lõi áp dụng toàn app
│   │   ├── filters/               # Exception filters
│   │   ├── interceptors/          # Response/logging/transform interceptors
│   │   └── middlewares/           # Middleware toàn cục
│   │
│   ├── shared/                    # Code dùng chung, không chứa business logic riêng module
│   │   ├── constants/             # Hằng số dùng chung
│   │   ├── decorators/            # Custom decorators
│   │   ├── guards/                # Guards dùng chung
│   │   ├── pipes/                 # Pipes dùng chung
│   │   ├── types/                 # Type/interface dùng chung
│   │   └── utils/                 # Helper functions
│   │
│   └── modules/                   # Các module nghiệp vụ
│       └── users/                 # Skeleton module users
│           ├── constants/         # Hằng số riêng của users
│           ├── controllers/       # User controllers, định nghĩa route API
│           ├── dto/               # Data Transfer Object, validate input
│           ├── enums/             # Enum riêng của users
│           ├── events/            # Event phát ra từ users
│           ├── exceptions/        # Exception riêng của users
│           ├── interfaces/        # Interface/type riêng của users
│           ├── listeners/         # Listener xử lý event
│           ├── mappers/           # Chuyển đổi giữa entity/schema/dto/response
│           ├── pipes/             # Pipe riêng của users
│           ├── repositories/      # Lớp truy cập database của users
│           ├── responses/         # Response model/view model
│           ├── schemas/           # Schema/entity database
│           └── services/          # Business logic của users
│
├── test/
│   ├── app.e2e-spec.ts            # E2E test mặc định cho GET /
│   └── jest-e2e.json              # Cấu hình Jest cho e2e test
│
├── dist/                          # Code đã build, sinh ra bởi npm run build
├── node_modules/                  # Dependencies, sinh ra bởi npm install
├── package.json                   # Scripts và danh sách dependencies
├── package-lock.json              # Khóa version dependencies
├── nest-cli.json                  # Cấu hình Nest CLI
├── tsconfig.json                  # Cấu hình TypeScript
├── tsconfig.build.json            # Cấu hình TypeScript khi build
├── eslint.config.mjs              # Cấu hình ESLint
└── .prettierrc                    # Cấu hình Prettier
```

## Quy Ước Phát Triển Module

Mỗi tính năng nên nằm trong `src/modules/<module-name>/`. Khi thêm một module mới, nên giữ bố cục gần với `users` module để code dễ tìm và dễ bảo trì:

- `controllers/`: nhận request và định nghĩa route.
- `dto/`: validate và mô tả dữ liệu đầu vào.
- `services/`: xử lý business logic.
- `repositories/`: tách logic truy cập database.
- `schemas/`: định nghĩa schema/entity khi có database.
- `responses/`: chuẩn hóa dữ liệu trả về client.
- `mappers/`: chuyển đổi dữ liệu giữa các lớp.
- `exceptions/`: lỗi nghiệp vụ riêng của module.
- `events/` và `listeners/`: dùng khi module cần giao tiếp thông qua event.

`shared/` chỉ nên chứa code dùng chung thật sự, ví dụ guard, pipe, decorator, constant hoặc helper không phụ thuộc vào nghiệp vụ cụ thể. `core/` nên dùng cho các thành phần áp dụng toàn app như filter, interceptor và middleware.

## Trạng Thái Hiện Tại

- Framework: NestJS 11
- Language: TypeScript
- HTTP platform: Express thông qua `@nestjs/platform-express`
- Endpoint hiện có: `GET /`
- Database: chưa cấu hình trong code hiện tại
- Auth: chưa cấu hình trong code hiện tại
