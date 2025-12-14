# AGENTS.md

This document defines **strict, non-negotiable rules** for any coding agent working in this frontend codebase.

The agent must prioritize:

- **Correctness**
- **Type safety**
- **Clarity**
- **Maintainability**

Speed is secondary.

If any rule below cannot be followed, the agent **must stop and ask for clarification**.

---

## 1. Core Rules (Absolute)

### 1.1 Do not guess or assume

- If behavior, UI logic, data shape, or intent is unclear:
  → **ASK for clarification before writing code.**

### 1.2 Never use `any`

- `any` is **forbidden**.
- If a type is unknown:
  - Use `unknown`
  - Narrow it properly with type guards
  - Or ask for clarification

### 1.3 Follow existing patterns strictly

- Match folder structure, naming, hooks, and conventions.
- Do not introduce new patterns without approval.
- When in doubt, search the codebase for similar patterns first.

### 1.4 Do not over-engineer

- Solve the problem as scoped.
- Do not add abstractions "for future use".
- Keep solutions simple and focused.

---

## 2. Package Management (Strict)

- **Always use `pnpm`**
- ❌ Do NOT use `npm`
- ❌ Do NOT use `yarn`

### Common Commands

```bash
# Install dependencies
pnpm install

# Add a dependency
pnpm add <package>

# Add a dev dependency
pnpm add -D <package>

# Run dev server
pnpm dev

# Build
pnpm build

# Run from package root
pnpm <script>
```

### Workspace Commands

```bash
# Run command for specific package
pnpm --filter <project_name> <command>

# Install dependencies for specific package
pnpm install --filter <project_name>

# Run lint for specific package
pnpm lint --filter <project_name>

# Run tests for specific package
pnpm turbo run test --filter <project_name>
```

---

## 3. Dev Environment Tips

### Finding Packages

- Use `pnpm dlx turbo run where <project_name>` to jump to a package instead of scanning with `ls`.

### Adding Packages to Workspace

- Run `pnpm install --filter <project_name>` to add the package to your workspace so Vite, ESLint, and TypeScript can see it.

### Creating New Packages

- Use `pnpm create vite@latest <project_name> -- --template react-ts` to spin up a new React + Vite package with TypeScript checks ready.

### Package Names

- Check the `name` field inside each package's `package.json` to confirm the right name—skip the top-level one.

---

## 4. Testing Instructions

### Running Tests

- Find the CI plan in the `.github/workflows` folder (if it exists).
- Run `pnpm turbo run test --filter <project_name>` to run every check defined for that package.
- From the package root you can just call `pnpm test`.
- The commit should pass all tests before you merge.

### Focused Testing

- To focus on one step, add the Vitest pattern: `pnpm vitest run -t "<test name>"`.

### Test Requirements

- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run `pnpm lint --filter <project_name>` to be sure ESLint and TypeScript rules still pass.
- **Add or update tests for the code you change, even if nobody asked.**

---

## 5. PR Instructions

### PR Title Format

- Title format: `[<project_name>] <Title>`
- Example: `[web] Add user authentication flow`

### Pre-Commit Checklist

- Always run `pnpm lint` before committing.
- Always run `pnpm test` before committing.
- Ensure all TypeScript checks pass.
- Ensure all tests pass.

### Code Quality

- Follow the core rules above.
- Ensure type safety (no `any`).
- Match existing patterns.
- Keep changes focused and scoped.

---

## 6. TypeScript & Linting

### Type Safety

- All code must be fully typed.
- Use TypeScript strict mode.
- No `any` types allowed.
- Use proper type narrowing for `unknown` types.

### Linting

- Run `pnpm lint --filter <project_name>` after making changes.
- Fix all ESLint errors before committing.
- Follow existing code style and conventions.

---

## Summary

Before making any changes:

1. ✅ Understand the requirement (ask if unclear)
2. ✅ Check existing patterns in the codebase
3. ✅ Use `pnpm` for all package operations
4. ✅ Write fully typed code (no `any`)
5. ✅ Run tests and linting before committing
6. ✅ Add/update tests for your changes

**When in doubt, ask for clarification rather than guessing.**

