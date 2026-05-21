# VibeHue Frontend

Frontend của VibeHue được xây dựng bằng React, TypeScript và Vite. Cấu trúc hiện tại đi theo hướng feature-based: code được chia theo tính năng nghiệp vụ trong `features/`, còn các thành phần dùng chung được đặt ở các folder cấp `src/` như `components/`, `hooks/`, `services/`, `types/` và `utils/`.

## Tech Stack

- React 19
- TypeScript
- Vite
- ESLint

## Yêu Cầu

- Node.js >= 20
- npm

## Cách Chạy Frontend

Di chuyển vào thư mục frontend:

```bash
cd frontend
```

Cài dependencies:

```bash
npm install
```

Chạy môi trường development:

```bash
npm run dev
```

Mặc định Vite sẽ chạy tại:

```text
http://localhost:5173
```

Nếu port `5173` đang được dùng, Vite có thể tự chọn port khác và hiển thị URL mới trong terminal.

## Cách Build Và Preview

Build project:

```bash
npm run build
```

Preview bản đã build:

```bash
npm run preview
```

Kiểm tra lint:

```bash
npm run lint
```

## Scripts

| Lệnh | Công dụng |
|:---|:---|
| `npm run dev` | Chạy app ở development mode với HMR. |
| `npm run build` | Type-check bằng `tsc -b`, sau đó build production bằng Vite. |
| `npm run preview` | Chạy thử bản production build ở local. |
| `npm run lint` | Kiểm tra code bằng ESLint. |

## Cấu Trúc Frontend

```text
frontend/
├── public/
│   ├── favicon.svg                # Favicon của ứng dụng
│   └── icons.svg                  # SVG sprite/icon public, có thể dùng trực tiếp qua URL
│
├── src/
│   ├── main.tsx                   # Entry point, render React app vào DOM
│   ├── App.tsx                    # Component gốc hiện tại của app
│   ├── index.css                  # CSS global áp dụng toàn app
│   ├── App.css                    # CSS riêng cho App.tsx hiện tại
│   │
│   ├── assets/                    # Tài nguyên được import trực tiếp trong code
│   │   ├── hero.png               # Ảnh đang dùng trong màn hình template hiện tại
│   │   ├── react.svg              # Logo React từ template Vite
│   │   ├── vite.svg               # Logo Vite từ template Vite
│   │   ├── icons/                 # Icon nội bộ import từ source
│   │   └── images/                # Ảnh nội bộ import từ source
│   │
│   ├── components/                # Component dùng chung, không gắn với nghiệp vụ cụ thể
│   │   ├── common/                # Button, Input, Modal, Table, Card, Badge...
│   │   ├── feedback/              # Loading, EmptyState, ErrorState, Toast...
│   │   └── layout/                # Header, Sidebar, Navbar, Footer...
│   │
│   ├── config/                    # Cấu hình frontend
│   │                               # Ví dụ: env.ts, routes.ts, apiEndpoints.ts
│   │
│   ├── features/                  # Các module/tính năng nghiệp vụ
│   │   ├── auth/                  # Tính năng xác thực
│   │   │   ├── components/        # Component chỉ dùng trong auth
│   │   │   ├── hooks/             # Hook riêng của auth, ví dụ useLogin
│   │   │   ├── services/          # API/service riêng của auth
│   │   │   ├── types/             # Type/interface riêng của auth
│   │   │   └── utils/             # Helper riêng của auth
│   │   │
│   │   └── users/                 # Tính năng quản lý/người dùng
│   │       ├── components/        # Component chỉ dùng trong users
│   │       ├── hooks/             # Hook riêng của users
│   │       ├── services/          # API/service riêng của users
│   │       └── types/             # Type/interface riêng của users
│   │
│   ├── hooks/                     # Custom hook dùng chung toàn app
│   │                               # Ví dụ: useDebounce, usePagination, useDisclosure
│   │
│   ├── layouts/                   # Layout cấp trang
│   │                               # Ví dụ: MainLayout, AuthLayout, DashboardLayout
│   │
│   ├── pages/                     # Các trang gắn với route
│   │   ├── auth/                  # Trang đăng nhập, đăng ký, quên mật khẩu
│   │   ├── dashboard/             # Trang dashboard/admin
│   │   └── errors/                # Trang 404, 403, 500
│   │
│   ├── routes/                    # Khai báo router và route guard
│   │                               # Ví dụ: AppRouter, protected routes, public routes
│   │
│   ├── services/                  # Service dùng chung để giao tiếp bên ngoài
│   │                               # Ví dụ: httpClient, axios instance, API base config
│   │
│   ├── store/                     # Global state
│   │   └── slices/                # Các slice/store nhỏ theo domain
│   │
│   ├── styles/                    # Style dùng chung
│   │                               # Ví dụ: variables.css, reset.css, theme.css
│   │
│   ├── types/                     # TypeScript type/interface dùng chung toàn app
│   │                               # Ví dụ: ApiResponse, Pagination, Nullable
│   │
│   └── utils/                     # Helper function dùng chung
│                                   # Ví dụ: formatCurrency, formatDate, storage helpers
│
├── index.html                     # HTML entry của Vite
├── package.json                   # Scripts và dependencies
├── vite.config.ts                 # Cấu hình Vite
├── eslint.config.js               # Cấu hình ESLint
├── tsconfig.json                  # TypeScript project references
├── tsconfig.app.json              # TypeScript config cho source app
└── tsconfig.node.json             # TypeScript config cho Vite config
```

## Công Dụng Và Quy Ước Từng Nhóm Folder

### `public/`

Chứa file tĩnh được serve trực tiếp từ root URL. Dùng cho favicon, manifest, robots.txt, hoặc SVG sprite public. File trong `public/` không cần import trong TypeScript, có thể gọi bằng đường dẫn như `/icons.svg`.

### `src/assets/`

Chứa ảnh, icon, font hoặc media được import vào component. Nếu asset cần đi qua pipeline build của Vite, đặt ở đây thay vì `public/`.

### `src/components/`

Chứa component tái sử dụng toàn app và không phụ thuộc nghiệp vụ cụ thể.

- `common/`: component UI nền tảng như Button, Input, Select, Modal.
- `feedback/`: component trạng thái như Loading, Empty, Error, Toast.
- `layout/`: component bố cục nhỏ như Header, Sidebar, Footer.

Không nên đặt component chỉ dùng riêng cho `auth` hoặc `users` ở đây. Component riêng của tính năng nên nằm trong `features/<feature>/components/`.

### `src/config/`

Chứa cấu hình frontend như biến môi trường, route constants, API endpoint constants, theme constants. Đây là nơi phù hợp để tạo các file như:

```text
config/
├── env.ts
├── routes.ts
└── apiEndpoints.ts
```

### `src/features/`

Chứa code theo từng nghiệp vụ. Đây là phần quan trọng nhất khi project lớn dần. Mỗi feature nên tự chứa component, hook, service và type riêng của nó.

Ví dụ:

```text
features/auth/
├── components/LoginForm.tsx
├── hooks/useLogin.ts
├── services/authService.ts
├── types/auth.types.ts
└── utils/authStorage.ts
```

Quy ước: nếu code chỉ phục vụ một feature, đặt trong feature đó. Nếu code dùng được ở nhiều feature, cân nhắc đưa lên `components/`, `hooks/`, `services/`, `types/` hoặc `utils/` cấp `src/`.

### `src/hooks/`

Chứa hook dùng chung toàn app, ví dụ `useDebounce`, `useClickOutside`, `usePagination`. Hook riêng của một feature nên để trong `features/<feature>/hooks/`.

### `src/layouts/`

Chứa layout cấp trang. Layout thường bọc quanh page và quyết định khung giao diện như sidebar, header, main content.

Ví dụ:

- `AuthLayout`: dùng cho login/register.
- `DashboardLayout`: dùng cho màn hình quản trị.
- `MainLayout`: dùng cho trang người dùng thông thường.

### `src/pages/`

Chứa component cấp route. Page nên tập trung ghép layout và feature lại với nhau, không nên chứa quá nhiều business logic.

Ví dụ:

```text
pages/auth/LoginPage.tsx
pages/dashboard/DashboardPage.tsx
pages/errors/NotFoundPage.tsx
```

### `src/routes/`

Chứa cấu hình router. Khi thêm React Router, có thể đặt `AppRouter.tsx`, `ProtectedRoute.tsx`, `publicRoutes.tsx`, `privateRoutes.tsx` ở đây.

### `src/services/`

Chứa service dùng chung để giao tiếp với backend hoặc external API. Nên đặt HTTP client chung ở đây, ví dụ:

```text
services/httpClient.ts
services/apiError.ts
```

Các API riêng theo nghiệp vụ nên để trong `features/<feature>/services/`, ví dụ `features/auth/services/authService.ts`.

### `src/store/`

Chứa global state. Hiện tại project mới có skeleton `store/slices/`, chưa cài thư viện state management. Nếu cần state nhẹ, có thể dùng Zustand. Nếu cần state phức tạp hơn, có thể dùng Redux Toolkit.

### `src/styles/`

Chứa style dùng chung như reset, variables, theme, typography. Hiện tại CSS global đang nằm ở `src/index.css`; sau này có thể tách thêm:

```text
styles/reset.css
styles/variables.css
styles/theme.css
```

### `src/types/`

Chứa type/interface dùng chung toàn app, ví dụ:

```ts
export interface ApiResponse<T> {
  data: T
  message?: string
}
```

Type riêng của từng tính năng nên để trong `features/<feature>/types/`.

### `src/utils/`

Chứa helper thuần logic, không phụ thuộc React component. Ví dụ format ngày, format tiền, xử lý localStorage, parse query string.

## Đánh Giá Hiện Trạng FE

Những phần đã có:

- Project đã được tạo bằng Vite + React + TypeScript.
- Đã có cấu trúc folder theo hướng mở rộng feature-based.
- Đã có sẵn `auth` và `users` feature skeleton.
- Đã có cấu hình TypeScript, ESLint và Vite.
- App hiện chạy từ `src/main.tsx` và render `src/App.tsx`.

Những phần nên bổ sung tiếp:

- Chưa có `package-lock.json`; sau khi chạy `npm install`, nên commit file này để khóa version dependencies.
- `App.tsx` vẫn là màn hình template mặc định của Vite, nên thay bằng router/layout chính của VibeHue.
- Chưa cài và cấu hình React Router, trong khi project đã có folder `routes/`.
- Chưa có HTTP client để gọi backend, nên thêm `src/services/httpClient.ts`.
- Chưa có file đọc biến môi trường, nên thêm `src/config/env.ts`.
- Chưa có `.env.example`, nên thêm để team biết cần cấu hình biến nào, ví dụ `VITE_API_BASE_URL`.
- Chưa có UI component thật trong `components/common/`.
- Chưa có test setup cho frontend. Nếu cần test UI, có thể cân nhắc Vitest và React Testing Library.
- Chưa có global state thật. Chỉ thêm Zustand hoặc Redux Toolkit khi có nhu cầu rõ ràng.

## Gợi Ý Bước Tiếp Theo

Thứ tự phát triển hợp lý:

1. Thay màn hình template trong `App.tsx` bằng `AppRouter`.
2. Cài React Router và tạo route cơ bản.
3. Tạo `layouts/AuthLayout.tsx` và `layouts/MainLayout.tsx`.
4. Tạo `pages/auth/LoginPage.tsx` và `pages/errors/NotFoundPage.tsx`.
5. Tạo `services/httpClient.ts` để gọi backend.
6. Tạo `.env.example` với `VITE_API_BASE_URL=http://localhost:3000`.
7. Bắt đầu triển khai `features/auth` và `features/users`.
