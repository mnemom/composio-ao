/**
 * Loads the real composio-core package (index.test.ts mocks it).
 *
 * composio-core@0.5 declares zod ^3 but the root pnpm override resolves it to
 * zod 4, and it builds its zod schemas when the module is evaluated. This guards
 * the import that loadComposioSDK performs in index.ts. It does not construct
 * the client: the constructor sends SDK telemetry and an npm version check.
 */

import { describe, it, expect } from "vitest";

describe("composio-core (real module)", () => {
  it("evaluates and exposes the Composio class loadComposioSDK resolves", async () => {
    const mod = (await import("composio-core")) as unknown as Record<string, unknown>;
    expect(typeof mod.Composio).toBe("function");
  });
});
