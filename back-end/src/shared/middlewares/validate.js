import { z } from "../lib/zod.js";

const REQUEST_PARTS = ["params", "query", "body"];

export default function validate(schemas) {
  return (req, res, next) => {
    const validated = {};
    const issues = [];
    for (const part of REQUEST_PARTS) {
      if (!schemas[part]) continue;
      const result = schemas[part].safeParse(req[part] ?? {});
      if (result.success) {
        validated[part] = result.data;
      } else {
        issues.push(...result.error.issues);
      }
      if (issues.length > 0) throw new z.ZodError(issues);

      req.validated = validated;
      next();
    }
  };
}

// const validate = (schemas) => (req, res, next) => {};
