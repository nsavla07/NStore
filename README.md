# NStore Operations Portal

An internal e-commerce operations portal featuring a clean, modern, enterprise-grade UX built with Next.js, React, and TypeScript. The portal supports role-based access, realistic operational workflows, and modular components designed for maintainability and scalability.

---

## 🚀 Project Overview

NStore Operations Portal is designed to simulate real-world internal operations for an e-commerce organization. It includes role-based workflows for Operations Agents, Managers, and Admins, covering merchant onboarding, order tracking, payment reconciliation, and support ticket handling.

The goal is to demonstrate clear UI/UX thinking, component reusability, and structured frontend architecture using industry-standard patterns.

---

## 🛠️ Tech Stack

- **Next.js** 14.2.6  
- **React** 18.3.1  
- **TypeScript** 5.6.3  
- **TailwindCSS** 3.4.14 (utility-first styling)  
- **Headless UI** Dialog (for accessible modals)  
- **Lucide Icons** (visual language)  
- **Zod** (pre-installed for future validation)  
- **Mock Backend** using Next.js API routes

---

## 📦 Core Modules

### **1. Merchant Onboarding**
- Multi-step onboarding (Basic → Documents → Review)  
- Document upload list with add/remove  
- Status lifecycle: `draft`, `submitted`, `approved`, `rejected`  
- Manager/Admin view: pending approvals overview  

### **2. Order Tracking**
- Search + advanced status filters  
- Delivery/payment discrepancy indicators  
- Detailed per-order timeline  

### **3. Payment Reconciliation**
- Payout summaries (total, pending, paid)  
- Discrepancy alerts  
- “Resolve” action for managers  

### **4. Support Tickets**
- Ticket list with status, assignee, priority  
- Chat-style threaded discussions  
- Assign to role + escalate to manager  

---

## 🔐 Role-Based Access

| Role | Accessible Modules |
|------|--------------------|
| **Operations Agent** | Dashboard, Merchants, Orders, Tickets |
| **Manager** | All Agent modules + Payments |
| **Admin** | Full system access |

Role selection persists via localStorage and can be changed from the Topbar or Login page.

---

## 📂 Key Directory Structure

```
src/
 ├── app/
 │    ├── layout.tsx                  # Global layout + providers
 │    ├── (auth)/login/page.tsx       # Role selection
 │    ├── (dashboard)/layout.tsx      # Sidebar + topbar shell
 │    ├── (dashboard)/dashboard/      # Dashboard summary
 │    ├── (dashboard)/merchants/      # Merchant onboarding + approvals
 │    ├── (dashboard)/orders/         # Order list + timeline
 │    ├── (dashboard)/payments/       # Payments + discrepancy resolution
 │    └── (dashboard)/tickets/        # Support ticket system
 │
 ├── components/                      # Reusable UI components
 ├── lib/
 │    ├── auth.tsx                    # AuthProvider, RoleGuard
 │    └── api.ts                      # Mock fetch helpers
 │
 └── server/
      ├── mockDb.ts                   # Mock in-memory data
      └── api routes (merchants, orders, payments, tickets)
```

---

## 🧩 Component Architecture

### **Auth System**
- `AuthProvider` exposes user role + persist via localStorage  
- `RoleGuard` restricts access based on role  

### **Reusable Components**
- `Card`, `Badge`, `DataTable`, `Modal`  
- `Stepper` (multi-step onboarding)  
- `UploadBox` (document list UI)  
- `SearchFilterBar`, `Alert`, `Timeline`  
- `ChatThread` (support ticket discussions)  

The system follows clean, modular design principles inspired by Stripe, Notion, Linear, Shopify Admin, and Vercel.

---

## 🔌 Mock API Endpoints

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/api/merchants` | GET, POST | Fetch/create merchants |
| `/api/orders` | GET, POST | Fetch/create orders |
| `/api/payments` | GET, POST | Payment summaries, discrepancies |
| `/api/tickets` | GET, POST | Ticket list + discussions |

All API routes respond with JSON. Document uploads are simulated with filenames only.

---

## 🧪 Usage Guide

1. Start the dev server  
   ```bash
   npm run dev
   ```
2. Open  
   ```
   http://localhost:3000/
   ```
3. Navigate to `/login` and select a role  
4. Explore the modules via the sidebar:
   - Create merchants  
   - Review documents  
   - Filter orders  
   - Resolve payment discrepancies  
   - Manage tickets using chat view  

---

## ⚙️ Development Commands

| Command | Description |
|--------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run typecheck` | Run TypeScript checks |
| `npm run lint` | Run ESLint |

---

## 🛠️ Configuration

- **Tailwind**: `tailwind.config.ts`  
- **Path Aliases**: defined in `tsconfig.json`  
- **Next.js Config**: `next.config.js`

---

## 🚧 Future Enhancements

- Manager approval actions for merchants  
- Advanced filtering across modules  
- Persisting updates via API instead of mock state  
- Role-specific dashboards with KPIs  
- Drag-and-drop file uploads with previews  

---

## 📘 Notes

This project uses fully local mock APIs and in-memory data. To integrate with production systems, replace the mock API routes with actual backend endpoints.
