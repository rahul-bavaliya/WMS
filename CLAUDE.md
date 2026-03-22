# WMS Platform — Complete Project Context for Claude Code

## Project Overview
Multi-Industry Work Order Management System (WMS) with AI, Telematics,
and Offline-First Mobile App. This is a SaaS platform that serves
multiple industries and multiple companies (multi-tenant).

## Business Goal
Build a commercial SaaS product to sell to local businesses at
$79–$499/month. Target: 20 clients in 3 months = $3K–$6K MRR.

---

## Industries Supported
- HVAC / Plumbing / Electrical (field service)
- Auto Garage (vehicle repairs, inspections)
- Manufacturing Units (machine maintenance, OEE)
- Scrap Yards (material tracking, buy/sell)
- Maintenance Shops (preventive maintenance, assets)

---

## Applications Built
Two apps only (desktop dropped):

### 1. Web App (Next.js 14)
- Who uses it: Admins, Branch Managers, Dispatchers
- Where: Office, always online
- Deploy: Vercel
- Path: apps/web/

### 2. Mobile App (Expo React Native)
- Who uses it: Technicians in the field
- Where: Field work, no internet (offline-first)
- Deploy: App Store + Google Play Store
- Offline: 100% via WatermelonDB
- Path: apps/mobile/

---

## Monorepo Structure
```
wms/                              ← root (Turborepo + pnpm)
├── apps/
│   ├── web/                      ← Next.js 14 web dashboard
│   └── mobile/                   ← Expo React Native mobile app
├── packages/
│   ├── db/                       ← Prisma schema + Supabase client
│   ├── api/                      ← tRPC routers (shared)
│   ├── types/                    ← Shared TypeScript types
│   ├── validators/               ← Zod schemas (shared)
│   ├── ai/                       ← Claude AI logic (shared)
│   └── utils/                    ← Shared utility functions
├── CLAUDE.md                     ← This file
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Complete Tech Stack

### Web App (apps/web/)
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + shadcn/ui + Radix UI
- Forms: React Hook Form + Zod
- State: Zustand (client) + TanStack Query v5 (server)
- Charts: Recharts
- Scheduling: FullCalendar (drag & drop)
- Maps: Google Maps JS API
- Export: jsPDF + SheetJS (xlsx)
- Real-time: Pusher (live updates)

### Mobile App (apps/mobile/)
- Framework: Expo SDK 51 + React Native
- Language: TypeScript
- Styling: NativeWind (Tailwind for RN)
- UI: React Native Paper
- Navigation: Expo Router (file-based)
- Offline DB: WatermelonDB (SQLite)
- GPS: Expo Location (background tracking)
- Camera: Expo Camera (photos + QR scan)
- Notifications: Expo Push Notifications
- Signature: React Native Signature Canvas
- VIN Scanner: Expo Camera + NHTSA API

### Backend / Shared
- API: tRPC v11 (type-safe, used by both web + mobile)
- Validation: Zod (shared schemas in packages/validators/)
- ORM: Prisma (packages/db/)
- Database: Supabase (PostgreSQL + pgvector)
- Cache: Redis (Upstash)
- Background Jobs: BullMQ
- File Storage: Cloudflare R2
- Real-time: Pusher

### Auth
- Provider: Clerk (multi-tenant org management)
- Microsoft SSO: Azure AD / Microsoft Entra ID (company accounts)
- Permissions: CASL (role-based access control)
- Roles: SUPER_ADMIN, COMPANY_ADMIN, BRANCH_MANAGER, DISPATCHER, TECHNICIAN, CUSTOMER

### Third-party Services
- Payments: Stripe (subscriptions + invoicing)
- SMS: Twilio
- Email: Resend
- In-app Notifications: Novu
- AI: Claude API (claude-sonnet-4-20250514)
- Voice-to-text: Whisper API (OpenAI)
- Maps: Google Maps JS API + Directions API
- Telematics: JDLink (John Deere), Cat Product Link, JCB LiveLink

### DevOps
- Monorepo: Turborepo + pnpm workspaces
- Web Deploy: Vercel (auto-deploy from GitHub)
- Mobile Build: EAS Build (Expo)
- CI/CD: GitHub Actions
- Monitoring: Sentry (errors) + PostHog (analytics)
- Logs: Axiom

---

## 25 Modules to Build

### Core Modules
1. Work Order Management (lifecycle: OPEN → ASSIGNED → IN_PROGRESS → COMPLETED → INVOICED)
2. Scheduling & Dispatch (FullCalendar drag & drop + Google Maps)
3. Customer Management (CRUD + history + assets)
4. Customer Signup Portal (6-step self-registration wizard)
5. Invoicing & Payments (Stripe + auto-generate on job complete)
6. Parts Management (catalog + stock + reorder alerts)
7. Job Templates + Cost Estimates (standard repair time + parts + cost)
8. GPS Technician Tracking (Expo Location + live map)
9. Notifications (SMS + Email + Push + In-app)

### Analytics Modules
10. Parts Analysis (usage, margin, stock, supplier performance)
11. Hours / KM Analysis (billable hours, overtime, travel distance)
12. Services Analysis (demand, revenue, satisfaction)
13. Repair Analysis (patterns, first-fix rate, comeback rate)
14. Repair Job Time Analysis (estimated vs actual, stages, delays)

### Financial Modules
15. Branch Financial Reporting (P&L per branch + consolidated)
16. Multi-Branch + Labor Rates (per branch rate cards)
17. Payroll Management (salary, hourly, commission + payslips)
18. Custom Contract Generator (templates + e-signature + PDF)

### Telematics Modules
19. Telematics Live Map (JD + CAT + JCB machines on Google Maps)
20. Alert → Auto Ticket (critical alerts auto-create work orders)

### Industry Modules
21. HVAC / Plumbing / Electrical (skill-based assignment)
22. Auto Garage (VIN scan + vehicle inspection + service history)
23. Manufacturing (machine OEE + sensor data + downtime)
24. Scrap Yard (material tracking + buy/sell + AI detection)
25. Maintenance Shop (assets + PM schedules + health scoring)

### Platform
- AI Throughout (Claude API — classify, assign, chatbot, vision, NL reports)
- Microsoft SSO (company accounts login)
- Offline-First Mobile (WatermelonDB sync)
- Custom Reporting + NL Queries (natural language → chart)

---

## Key Coding Conventions

### General
- Always use TypeScript strict mode
- Always validate inputs with Zod before DB operations
- All API routes go through tRPC (never REST endpoints)
- Use server components by default in Next.js
- Add 'use client' only when absolutely needed (hooks, events)
- Always handle errors with TRPCError and proper codes
- Use async/await, never .then() chains

### Multi-tenancy (CRITICAL)
- Every DB query MUST filter by companyId
- Never expose data across companies
- companyId always comes from ctx (auth context), never from user input
- Branch isolation: branchId scopes data within a company
- Example: db.workOrder.findMany({ where: { companyId: ctx.companyId } })

### Database
- All IDs use cuid() — never uuid() or auto-increment
- All models have createdAt and updatedAt
- Soft delete where possible (isActive: false)
- Always include companyId on every model
- Run prisma generate after every schema change
- Run prisma migrate dev --name description for migrations

### tRPC Patterns
- publicProcedure: no auth required
- protectedProcedure: requires Clerk auth
- tenantProcedure: requires auth + companyId + role
- Always use .input(z.object({...})) for mutations
- Always return typed objects, never any

### File Naming
- Components: PascalCase (WorkOrderCard.tsx)
- Hooks: camelCase with use prefix (useWorkOrders.ts)
- Utils: camelCase (formatCurrency.ts)
- API routes: camelCase (workOrders.ts)
- Types: PascalCase interfaces (WorkOrder, Customer)

### Styling
- Tailwind utility classes only
- shadcn/ui for all base components
- Never inline styles
- Use cn() helper for conditional classes
- Responsive by default (mobile-first)

### AI (Claude API)
- Model: claude-sonnet-4-20250514
- Always cache AI responses in Redis (avoid repeated calls)
- Stream responses for chatbot features
- Always include system prompt with company context
- Return structured JSON from AI when needed
- Handle AI errors gracefully (fallback to manual)

### Offline (Mobile)
- Always write to WatermelonDB first (never direct API)
- Queue all changes in sync_queue table
- Sync automatically when NetInfo detects internet
- Use local UUIDs for offline-created records
- Resolve conflicts: local wins if newer timestamp

---

## Environment Variables Required

```
# Database (Supabase)
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[REF].supabase.co:5432/postgres
DIRECT_URL=postgresql://postgres:[PASSWORD]@db.[REF].supabase.co:5432/postgres

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=WMS Platform

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Microsoft Azure AD (for company SSO)
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
AZURE_AD_TENANT_ID=your-tenant-id

# AI
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-... (for Whisper voice)

# Payments
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Notifications
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
RESEND_API_KEY=re_...
EMAIL_FROM=noreply@yourdomain.com

# Real-time
PUSHER_APP_ID=...
PUSHER_KEY=...
PUSHER_SECRET=...
NEXT_PUBLIC_PUSHER_KEY=...
NEXT_PUBLIC_PUSHER_CLUSTER=ap2

# Maps
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIza...

# File Storage (Cloudflare R2)
R2_ACCOUNT_ID=...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=wms-files

# Cache (Upstash Redis)
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...

# Telematics
JOHN_DEERE_CLIENT_ID=...
JOHN_DEERE_CLIENT_SECRET=...
CAT_API_KEY=...
JCB_API_KEY=...

# Monitoring
SENTRY_DSN=https://...
NEXT_PUBLIC_POSTHOG_KEY=phc_...
```

---

## Pricing Plans

| Feature | Starter $79 | Growth $179 | Pro $299 | Enterprise $499 |
|---------|-------------|-------------|----------|-----------------|
| Work Orders | ✅ | ✅ | ✅ | ✅ |
| Branches | 1 | 3 | 10 | Unlimited |
| Mobile App | ✅ | ✅ | ✅ | ✅ |
| Customer Portal | ✅ | ✅ | ✅ | ✅ |
| Contracts | Basic | ✅ | ✅ | ✅ |
| Analytics | ❌ | ✅ | ✅ | ✅ |
| Payroll | ❌ | 10 staff | 50 staff | Unlimited |
| Financial Reports | ❌ | Basic | Full | Full + AI |
| Telematics | ❌ | ❌ | 10 machines | Unlimited |
| AI Features | ❌ | Basic | Full | Full + Custom |

---

## Phase-by-Phase Build Schedule

---

### PHASE 1 — Foundation (Weeks 1–3)
**Goal: Running web + mobile + DB connected. Login with Microsoft working.**

#### Week 1 — Project Setup & Infrastructure
**Day 1 — Monorepo + Apps**
- Create Turborepo monorepo with pnpm: `npx create-turbo@latest wms --package-manager pnpm`
- Remove example apps, create Next.js 14 web app in apps/web/
- Create Expo React Native mobile app in apps/mobile/
- Test both run locally

**Day 2 — GitHub + Packages**
- Initialize git, create GitHub repo, push
- Create 6 shared packages: db, api, types, validators, ai, utils
- Create package.json for each with correct names (@wms/db, @wms/api etc.)
- Run pnpm install from root

**Day 3 — Supabase + Prisma**
- Create Supabase project (free tier)
- Install Prisma in packages/db/
- Create base schema: Company, Branch, User, Customer, WorkOrder, LaborRate, Part
- Run first migration: `prisma migrate dev --name init`
- Run `prisma generate`
- Test with Prisma Studio

**Day 4 — Clerk + Microsoft SSO**
- Create Clerk app, enable Microsoft OAuth provider
- Register Azure AD App in portal.azure.com
- Install @clerk/nextjs in apps/web/
- Create middleware.ts to protect routes
- Create /login page with SignIn component
- Test Microsoft company login works

**Day 5 — tRPC Setup + CI/CD**
- Install tRPC in packages/api/ and apps/web/
- Create base tRPC context with Clerk auth
- Create health check router (first working API)
- Connect web app to tRPC
- Setup GitHub Actions CI/CD → auto deploy to Vercel
- Deploy to Vercel, verify live URL works

#### Week 2 — Core Database & API
**Day 1–2 — Complete Prisma Schema**
- Add ALL remaining models to schema.prisma:
  - WorkOrderNote, WorkOrderPhoto, WorkOrderPart
  - TimeLog, TravelLog, RepairLog, RepairTimeLog
  - JobTemplate, TemplatePart, TemplateChecklist, JobCostEstimate
  - ServiceCatalog, ServiceReview
  - PayrollConfig, EmployeePayProfile, Payslip, SalaryAdvance, PayrollDeduction
  - CustomerProfile, CustomerAddress, CustomerAsset, CustomerDocument
  - ContractTemplate, Contract, ContractRenewal, ContractAmendment
  - Vehicle, VehicleInspection (Auto Garage)
  - Machine, MachineSensorData, MaintenanceLog (Manufacturing)
  - ScrapMaterial, ScrapTransaction (Scrap Yard)
  - Asset (Maintenance Shop)
  - TelematicsMachine, TelemetryLog, MachineFaultCode, TelematicsAlert, Geofence
  - BranchFinancialSummary, BranchExpense, BranchBudget
  - Report, ReportExport, Dashboard, DashboardWidget
  - AIInteraction, AIInsight, KnowledgeBase
  - PartUsageLog, PartReorder, PartSupplier
  - RepairPattern, RepairTimeBenchmark
  - SyncQueue (for offline mobile)
- Run: `prisma migrate dev --name add_all_tables`
- Run: `prisma generate`

**Day 3 — Multi-tenancy Middleware**
- Create tenantMiddleware in packages/api/src/middleware/tenancy.ts
- Fetch user + company + branch from DB on every request
- Attach to ctx: { user, companyId, branchId, role }
- Create tenantProcedure that requires tenantMiddleware
- Test that queries without companyId are rejected

**Day 4–5 — Core tRPC Routers**
- Create companies router (getCurrent, create, update)
- Create branches router (getAll, create, update, getById)
- Create users router (getMe, getAll, invite, updateRole)
- Connect all to root appRouter in packages/api/src/root.ts

#### Week 3 — Onboarding + Dashboard
**Day 1–2 — Onboarding Flow (Web)**
- Create /onboarding page with 5-step wizard:
  - Step 1: Company name, email, phone, logo upload
  - Step 2: Industry selection (5 industries with icons)
  - Step 3: Create first branch (name, address, GPS pin)
  - Step 4: Setup labor rates (regular, overtime, emergency)
  - Step 5: Invite first users (email + role)
- Auto-redirect to /dashboard on complete

**Day 3–4 — Dashboard Layout**
- Create apps/web/app/dashboard/layout.tsx with sidebar + header
- Build Sidebar component with all nav items + active state
- Build Header component with user menu + notifications bell
- Create /dashboard/overview page with placeholder KPI cards
- Make fully responsive (mobile sidebar collapses)

**Day 5 — Deploy + Test**
- Push all code to GitHub
- Verify Vercel auto-deploys
- Test full flow: signup → Microsoft login → onboarding → dashboard
- Fix any bugs
- Commit: "feat: Phase 1 complete — foundation ready"

**Phase 1 Deliverable:**
✅ Monorepo running (web + mobile)
✅ Full Prisma schema migrated
✅ Login with Microsoft SSO works
✅ Onboarding flow complete
✅ Dashboard layout live
✅ Deployed to Vercel

---

### PHASE 2 — Work Orders + Core Features (Weeks 4–7)
**Goal: Technician can be assigned a job and invoice auto-generates.**

#### Week 4 — Work Orders
**Day 1–2 — Work Order API**
- Create workOrders tRPC router:
  - create (with AI classification)
  - getAll (with filters: status, priority, branch, date range)
  - getById (with all relations)
  - update (status, assignment, notes)
  - assign (technician assignment)
  - addNote (internal + customer-visible)
  - uploadPhoto (before/after)
  - complete (trigger invoice generation)
- Add SLA tracking on create

**Day 3–4 — Work Order Web UI**
- List page: table + kanban toggle, filters, search
- Create form: AI-assisted (auto-classify job type + trade)
- Detail page: timeline, notes, photos, parts used, status updates
- Status workflow: drag between columns in kanban

**Day 5 — Customer Management**
- Customer list + search + filters
- Create/edit customer form
- Customer detail: history, assets, work orders, invoices

#### Week 5 — Job Templates + Cost Estimates
**Day 1–2 — Job Templates**
- Create jobTemplates tRPC router (CRUD)
- Template library web UI with industry + trade filters
- Template form: name, estimated time, checklist steps, suggested parts
- Machine brand mapping (for telematics phase)

**Day 3–4 — Cost Estimates**
- Auto-fill estimate from selected template
- Labor cost = estimated hours × branch labor rate
- Parts cost = sum of suggested parts from catalog
- Total estimate with tax calculation
- Send estimate to customer (email via Resend)
- Customer accept/reject flow → convert to work order

**Day 5 — Standard Repair Times**
- Repair time benchmarks per job type + trade
- Est vs actual tracking setup
- RepairTimeBenchmark table populated with defaults

#### Week 6 — Parts Management
**Day 1–2 — Parts Catalog API + UI**
- Parts CRUD router
- Parts list with search, filter by category
- Stock management (qty in, qty out)
- Reorder alerts (when stock < minStockQty)
- Supplier management per part

**Day 3–4 — Parts on Work Orders**
- Add parts to work order (scan QR or search)
- Auto-deduct from stock on job complete
- PartUsageLog created automatically
- Parts cost auto-calculated on invoice

**Day 5 — Purchase Orders**
- Auto-create PO when reorder alert triggers
- Send PO to supplier email
- Receive stock → update qty
- BullMQ job for daily stock check

#### Week 7 — Invoicing + Payments
**Day 1–2 — Invoice Generation**
- Auto-generate invoice on job complete
- Labor (actual hours × labor rate) + parts + tax
- jsPDF invoice PDF with company logo
- Invoice list + detail web UI

**Day 3 — Stripe Integration**
- Stripe subscriptions (Starter/Growth/Pro/Enterprise plans)
- Payment links embedded in invoice emails
- Stripe webhook handler → mark invoice PAID
- Customer payment portal page

**Day 4–5 — Payroll Config**
- Payroll config setup per branch
- Employee pay profiles (salary/hourly/commission)
- Bank details per employee
- Foundation ready for payroll run in Phase 7

**Phase 2 Deliverable:**
✅ Work orders full lifecycle working
✅ Job templates with cost estimates
✅ Parts catalog + stock management
✅ Invoice auto-generation
✅ Stripe subscriptions live
✅ Payroll config ready

---

### PHASE 3 — Scheduling + Mobile App (Weeks 8–10)
**Goal: Technician completes full job on phone. Customer notified automatically.**

#### Week 8 — Scheduling & Dispatch
**Day 1–2 — Scheduling API**
- Scheduling tRPC router: create, update, getByDate, getByTech
- Conflict detection (double-booking prevention)
- Technician availability calendar
- SLA breach detection + auto-alert

**Day 3–4 — Dispatch Web UI**
- FullCalendar integration (drag & drop jobs)
- Technician workload view (jobs per tech per day)
- Google Maps dispatch view (all techs on map)
- Assign job by dragging onto technician slot

**Day 5 — Real-time Updates**
- Pusher setup (channels per company)
- Live status updates on dispatch board
- Job assigned → instant notification to technician
- Status change → instant update on dashboard

#### Week 9 — Technician Mobile App
**Day 1 — Mobile Auth**
- Clerk + Microsoft SSO on Expo mobile
- Biometric login (FaceID / Fingerprint)
- Remember session (no re-login on app open)
- Offline auth (cached token)

**Day 2–3 — Job Screens**
- Home screen: today's jobs list with status badges
- Job detail: customer info, address, job description
- Start / Pause / Complete job with time tracking
- Timer display (running time visible)

**Day 4 — Job Execution**
- Checklist screen (from job template)
- Photo capture (before/after with Expo Camera)
- Parts used logger (search catalog + QR scan)
- Voice-to-text notes (Whisper API)
- Repair details form (fault type, action taken)

**Day 5 — Job Completion**
- Customer digital signature capture
- Travel KM auto-logged (GPS)
- Submit completion → auto-create invoice
- Offline: queue all data, sync when online

#### Week 10 — GPS + Notifications + Offline
**Day 1–2 — GPS Tracking**
- Expo Location background tracking
- Send location to server every 30 seconds
- Live technician pins on dispatch map (Pusher)
- Route history per job

**Day 3 — Notifications**
- Twilio SMS: job assigned, technician dispatched, job complete
- Resend email: same triggers + invoice sent
- Expo Push: new job, SLA alert, message from office
- Novu in-app: notification center in web dashboard

**Day 4–5 — Offline Sync Engine**
- WatermelonDB schema (all mobile tables)
- SyncEngine class (push + pull)
- NetInfo monitoring (detect online/offline)
- Sync queue processing (retry on failure)
- Conflict resolution (newer timestamp wins)
- Offline banner UI component
- Pre-sync strategy (download today's jobs on WiFi)

**Phase 3 Deliverable:**
✅ Drag & drop scheduling live
✅ Google Maps dispatch view
✅ Technician mobile app working
✅ Full job lifecycle on mobile
✅ GPS tracking live
✅ Offline mode working
✅ Auto-sync when back online
✅ All notifications firing

---

### PHASE 4 — Analytics + Financial Reports (Weeks 11–13)
**Goal: All 5 analysis modules live. Branch P&L auto-calculated.**

#### Week 11 — Core Analytics
**Day 1–2 — Parts Analysis**
- partsAnalysis tRPC router
- Top used parts (by qty + by revenue)
- Parts margin report (cost vs selling price)
- Slow moving stock alerts
- Supplier performance ranking
- Parts usage trend chart (Recharts)

**Day 3–4 — Hours & KM Analysis**
- hoursKmAnalysis tRPC router
- Billable vs non-billable hours per technician
- Overtime hours + cost
- Utilisation rate (billable/total %)
- KM per technician per day/month
- Fuel cost estimation
- Zone heatmap (Google Maps)

**Day 5 — Services Analysis**
- servicesAnalysis tRPC router
- Most requested services (by count + revenue)
- Revenue per service type
- Customer satisfaction scores
- Repeat service rate
- Seasonal demand chart

#### Week 12 — Repair Analytics
**Day 1–2 — Repair Analysis**
- repairAnalysis tRPC router
- Fault pattern detection (most common faults)
- First-time fix rate per technician
- Comeback rate (repeat repair for same fault)
- Repair cost breakdown (labor vs parts)
- Root cause analysis grouping

**Day 3–4 — Repair Time Analysis**
- repairTimeAnalysis tRPC router
- Estimated vs actual time comparison
- Time breakdown by stage (diagnosis, repair, testing)
- Delay reason analysis (parts, access, approval)
- Time efficiency score per technician
- Benchmark comparison chart

**Day 5 — Analytics Dashboards**
- All charts on analytics pages (Recharts + TanStack Table)
- Date range filters on all charts
- Export to PDF (jsPDF) + Excel (SheetJS)
- AI insights button (Claude analyses data → text insights)

#### Week 13 — Financial Reporting
**Day 1–2 — Branch P&L**
- BranchFinancialSummary auto-calculation (BullMQ daily job)
- Revenue: invoiced + collected + outstanding
- Costs: labor + parts + overhead
- Gross profit + margin %
- Branch P&L web UI with gauge charts

**Day 3 — Consolidated Reports**
- All branches combined P&L
- Branch vs branch comparison bar chart
- Top performing branch card
- Company totals summary

**Day 4–5 — Budget Management**
- Set monthly/quarterly budgets per branch
- Budget vs actual progress bars
- Alert when 80% of budget reached
- Expense logging per category
- Expense list + category pie chart

**Phase 4 Deliverable:**
✅ Parts analysis live
✅ Hours/KM analysis live
✅ Services analysis live
✅ Repair analysis live
✅ Repair time analysis live
✅ Branch P&L auto-calculated
✅ Budget vs actual tracking
✅ All exports working (PDF + Excel)

---

### PHASE 5 — Telematics (Weeks 14–16)
**Goal: Live map of all machines. Critical alert auto-creates work order.**

#### Week 14 — Telematics Foundation
**Day 1 — API Credentials**
- Register on John Deere developer portal (developer.deere.com)
- Get Cat Product Link API credentials (cat.com dealer portal)
- Get JCB LiveLink API credentials (JCB dealer)
- Store all API keys in .env

**Day 2–3 — Sync Engine**
- TelematicsSync BullMQ job (runs every 5 minutes)
- Pull GPS + engine status + fuel + DTC codes from JDLink API
- Pull same from Cat Product Link API
- Pull same from JCB LiveLink API
- Update TelematicsMachine live status fields
- Insert TelemetryLog record per sync

**Day 4–5 — Machine Management**
- Machine CRUD web UI (add machine, select brand, link to branch)
- Configure telematics provider per machine
- Machine detail dashboard: fuel gauge, temp, RPM, engine hours
- Machine list view per branch

#### Week 15 — Live Map + Alerts
**Day 1–2 — Live Telematics Map**
- Google Maps with all machines plotted
- Custom markers per brand (JD yellow, CAT yellow, JCB yellow)
- Color by engine status (green=ON, red=OFF, yellow=IDLE)
- Click machine → popup with live stats
- Machine trail history (movement polyline)
- Filter by: brand, branch, status

**Day 3 — Geofence Management**
- Draw geofences on map (circle + polygon)
- Assign machines to geofences
- Breach detection on each telemetry sync
- Breach creates TelematicsAlert automatically

**Day 4–5 — Alert Dashboard**
- Alert list with severity color coding (Critical/High/Medium/Low)
- Alert detail: machine info + fault description + timestamp
- Acknowledge + resolve workflow
- Alert history per machine

#### Week 16 — Alert → Auto Ticket
**Day 1–2 — AI Alert Diagnosis**
- On new critical alert → send to Claude API
- Claude analyses: machine brand + model + DTC code + sensor data
- Returns: diagnosis + likely cause + recommended fix + parts needed
- Store AI diagnosis in TelematicsAlert.aiDiagnosis

**Day 3–4 — Auto Work Order Creation**
- Critical alerts auto-create work order
- Pre-fill from AI diagnosis (title, description, job type, priority)
- Match to nearest job template
- Auto-assign to nearest available technician
- Notify branch manager immediately

**Day 5 — Service Schedule**
- Machine service schedule setup (500hr, 1000hr, annual)
- Service due alerts (X hours before due)
- Link to job templates for auto-WO creation
- Overdue service list view

**Phase 5 Deliverable:**
✅ JD + CAT + JCB machines on live map
✅ Real-time GPS + fuel + temp + engine status
✅ Geofences with breach detection
✅ All alert types firing
✅ AI diagnosis on critical alerts
✅ Critical alerts auto-create work orders
✅ Service schedules with auto-alerts

---

### PHASE 6 — AI Features (Weeks 17–18)
**Goal: Claude AI features live across all modules.**

#### Week 17 — Core AI
**Day 1 — Claude Setup**
- packages/ai/client.ts: Anthropic SDK setup
- packages/ai/cache.ts: Redis caching for AI calls
- Streaming setup for chatbot responses
- Error handling + fallback for AI failures
- Rate limiting for AI calls

**Day 2 — Work Order AI**
- Auto-classify: send description → Claude → get jobType, tradeType, priority, estimatedHrs
- Auto-assign: send WO + available techs → Claude → best technician + reason
- Template suggestion: send fault description → Claude → matching template

**Day 3 — Job Template AI**
- Claude generates checklist steps for new templates
- Claude suggests parts list for job type
- Claude refines time estimates based on historical data
- Claude writes standard repair procedures

**Day 4 — Customer Chatbot**
- Streaming chat UI on customer portal
- Claude system prompt with company + service info
- Customer can: raise service request, check status, get FAQ answers
- AI hands off to human agent if needed

**Day 5 — Photo Analysis (Mobile)**
- Claude Vision API on photo capture screen
- Upload before photo → Claude analyses → detects fault type
- Returns: fault detected, severity, recommended action, parts needed
- Pre-fills repair form from AI analysis

#### Week 18 — Advanced AI
**Day 1 — Voice-to-Text (Mobile)**
- Whisper API for voice recording on mobile
- Record → transcribe → auto-fill job notes
- Auto-fill repair details from voice description
- Works offline (queued for transcription when online)

**Day 2 — NL Report Queries**
- NL query input box on reports page
- User types: "show me revenue last month by technician"
- Claude parses → generates chart config → Recharts renders
- Insight cards below chart (Claude written)

**Day 3 — Daily AI Insights**
- BullMQ daily cron job (runs at 6am)
- Claude analyses last 24h data per company
- Generates: anomalies, top performer, lowest efficiency, parts to reorder
- Email summary to company admin (Resend)
- In-app insight cards on dashboard

**Day 4–5 — Predictive Maintenance**
- Score all assets/machines daily (0-100 health score)
- Claude analyses: age, last service, fault history, usage hours
- If score < 30 → auto-create preventive maintenance WO
- Prediction chart showing health trend
- AI recommendation: repair vs replace

**Phase 6 Deliverable:**
✅ Work order AI classification working
✅ Auto-assign technician with AI
✅ Customer chatbot streaming
✅ Photo → fault analysis on mobile
✅ Voice-to-text notes on mobile
✅ Natural language report queries
✅ Daily AI insights emails
✅ Predictive maintenance scoring

---

### PHASE 7 — Industry Modules + New Modules (Weeks 19–21)
**Goal: All 5 industries + payroll + contracts + customer portal live.**

#### Week 19 — Auto Garage + Manufacturing
**Day 1–2 — Auto Garage**
- Vehicle CRUD (linked to customer)
- VIN scanner (Expo Camera → NHTSA API auto-fetch make/model/year)
- Vehicle inspection checklist (per make/model)
- Service history timeline per vehicle
- AI fault diagnosis from symptom description

**Day 3 — Manufacturing**
- Machine asset management (not telematics — separate from JD/CAT/JCB)
- OEE calculation (Availability × Performance × Quality)
- Downtime logging per machine
- Production line view

**Day 4–5 — Scrap Yard + Maintenance Shop**
- Scrap material catalog (Ferrous, Non-Ferrous, E-Waste)
- Buy/sell transaction logging with weighbridge
- AI material detection from photo (Claude Vision)
- Preventive maintenance calendar
- Asset health scoring
- PM schedule auto-create work orders

#### Week 20 — Customer Signup Portal
**Day 1–2 — 6-Step Signup Wizard (Web)**
- Step 1: Account details (name, email, phone, password)
- Step 2: Business info (company name, reg no, VAT, logo)
- Step 3: Service address + billing address (GPS pin)
- Step 4: Equipment/assets (make, model, serial, warranty)
- Step 5: Document uploads (ID proof, business registration)
- Step 6: Complete (pending approval screen)

**Day 3 — Customer Signup (Mobile)**
- Same 6-step flow on Expo mobile
- Camera for document photo capture
- GPS auto-detect for address

**Day 4–5 — Approval Workflow**
- Pending signups list for company admin
- AI document verification (Claude Vision → extract + verify ID)
- Approve → send welcome email + activate portal access
- Reject → notify customer with reason

#### Week 21 — Payroll + Contracts
**Day 1–2 — Payroll Run**
- Run payroll wizard: select period + branch
- Auto-calculate from TimeLogs + TravelLogs
- Regular hours × rate + overtime × OT rate + commission + travel allowance
- Tax deductions + advance deductions
- Review screen before approve

**Day 3 — Payslips**
- Approve payroll → generate payslip PDFs (jsPDF)
- Email payslips to employees (Resend)
- Mobile: technician views own payslips
- Salary advance: request → approve → deduct from next payroll

**Day 4 — Contract Templates**
- Contract template builder (WYSIWYG editor)
- Merge fields ({{customer.name}}, {{contract.startDate}} etc.)
- AI generates template content for: AMC, SLA, Installation, NDA
- Template library with industry filters

**Day 5 — Contract Generator + E-Sign**
- Generate contract from template + auto-fill from customer/WO data
- Preview before sending
- Send to customer via email with signing link
- Customer e-signs on portal (web + mobile)
- Company countersigns
- Final PDF generated with both signatures
- Contract expiry alerts (BullMQ cron)
- Auto-renewal option

**Phase 7 Deliverable:**
✅ All 5 industry modules working
✅ Customer self-signup portal live
✅ AI document verification working
✅ Payroll run + payslip PDFs
✅ Contract generator + e-signature
✅ Contract expiry alerts

---

### PHASE 8 — Testing + Beta + Launch (Weeks 22–24)
**Goal: Apps submitted. 3 beta clients live. Sales outreach started.**

#### Week 22 — Testing
**Day 1–2 — Unit Tests**
- Vitest setup in all packages
- Test all tRPC routers (80% coverage target)
- Test all Zod validators
- Test utility functions
- Test AI prompt outputs

**Day 3–4 — E2E Tests**
- Playwright setup in apps/web/
- Test critical flows:
  - Microsoft login → onboarding → dashboard
  - Create work order → assign → complete → invoice
  - Customer signup → approval → portal access
  - Run payroll → generate payslip
  - Generate contract → customer signs

**Day 5 — Mobile Testing**
- Test all screens on iOS Simulator
- Test all screens on Android Emulator
- Test offline mode (airplane mode)
- Test sync (turn off airplane mode)
- Test on real iPhone + Android device

#### Week 23 — Beta Testing
**Day 1 — Performance**
- API response time target: < 200ms
- Add Redis caching to heavy queries
- Optimize Prisma queries (add indexes)
- Test with 100 concurrent users (k6)
- Lighthouse score target: > 90

**Day 2 — Security**
- OWASP Top 10 checklist
- SQL injection testing
- Auth bypass testing
- Rate limiting verification
- API key security audit

**Day 3–4 — Beta Client 1: HVAC Company**
- In-person demo + setup
- Create company account
- Import existing customers
- Train on work order creation
- Train on mobile app
- Collect feedback after 1 week

**Day 5 — Beta Client 2: Auto Garage**
- Demo + setup
- Vehicle data import
- VIN scanner training
- Mobile app for mechanics
- Collect feedback

#### Week 24 — Launch
**Day 1 — Fix Critical Bugs**
- Prioritise bugs from beta feedback
- Fix all Critical + High severity bugs
- Re-test fixed bugs

**Day 2 — App Store Submission**
- iOS: Build with EAS (`eas build --platform ios`)
- Submit to App Store (Apple review: 1-3 days)
- Android: Build with EAS (`eas build --platform android`)
- Submit to Google Play (review: 1-2 days)

**Day 3 — Landing Page**
- Landing page on yourdomain.com
- Pricing page (4 plans)
- Feature comparison vs ServiceTitan/Jobber
- Demo video
- Contact form

**Day 4–5 — Sales Outreach**
- List 50 local HVAC + Auto Garage businesses
- In-person demos (target 5 per day)
- Offer 30-day free trial
- Goal: 3 paying clients by end of week

**Phase 8 Deliverable:**
✅ 80%+ test coverage
✅ All critical bugs fixed
✅ iOS app submitted to App Store
✅ Android app submitted to Play Store
✅ Landing page live
✅ 3 beta clients actively using
✅ Sales outreach started
✅ First paying customer 🎉

---

## Current Status

### Current Phase
Phase 1 — Foundation

### Current Week
Week 1 — Project Setup

### Current Day
Day 1 — Monorepo + Apps Setup ✅ COMPLETE

### Completed Steps
(Update this list as you complete each step)
- [x] Monorepo created
- [x] Web app created
- [x] Mobile app created
- [x] Prisma schema created
- [ ] GitHub repo pushed
- [ ] Supabase project created
- [ ] First migration run
- [ ] Clerk setup
- [ ] Microsoft SSO configured
- [ ] tRPC setup (context + routers)
- [ ] Vercel deploy

### Files Created So Far
```
wms/
├── CLAUDE.md
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
├── apps/
│   ├── web/                    # Next.js 14 + Tailwind + shadcn/ui
│   │   ├── app/
│   │   │   ├── layout.tsx      # Root layout
│   │   │   ├── page.tsx       # Landing page
│   │   │   └── globals.css    # Tailwind setup
│   │   ├── tailwind.config.cjs
│   │   ├── postcss.config.cjs
│   │   └── tsconfig.json
│   └── mobile/                 # Expo SDK 55 React Native
│       ├── App.tsx
│       └── package.json
└── packages/
    ├── db/                     # Prisma schema (55 models)
    │   ├── prisma/schema.prisma
    │   ├── src/client.ts
    │   └── package.json
    ├── api/                    # tRPC routers
    │   ├── src/
    │   │   ├── context.ts      # tRPC context + tenantProcedure
    │   │   ├── root.ts        # Root router
    │   │   └── routers/       # companies, branches, workOrders
    │   └── package.json
    ├── types/                  # Shared TypeScript types
    ├── validators/             # Zod schemas
    ├── ai/                     # Claude API client
    └── utils/                  # Utilities (cn, formatCurrency, etc.)
```

### Decisions Made
- Using Supabase instead of Railway (faster setup)
- Using cuid() for all IDs
- Branch code format: "CITY-01" e.g. "MUM-01"
- Default currency: USD (update if different)
- Dropping desktop app for now (can add Tauri later)
- Two apps: web (Next.js 14) + mobile (Expo SDK 55)
- Next.js 14.2.0 (not latest 15.x for stability)

---

## How to Work With Claude Code

When asking Claude Code to build something always specify:
1. Which file to create/edit
2. Which phase/week/day it belongs to
3. Any specific requirements

Example prompts:
- "Build Phase 1 Week 1 Day 1 — create the Turborepo monorepo"
- "Create the Prisma schema for all models in packages/db/prisma/schema.prisma"
- "Build the work order tRPC router in packages/api/src/routers/workOrders.ts"
- "Fix the error in apps/web/app/dashboard/layout.tsx"
- "Add the Branch model to the Prisma schema following our conventions"

Claude Code will:
- Read this CLAUDE.md for full context
- Follow all conventions listed above
- Build exactly what is described in the phase schedule
- Fix errors and run commands when needed