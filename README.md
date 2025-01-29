# TypeScript Type Safety Issue

This example demonstrates a type safety issue in TypeScript that may occur when you don't properly define and validate function arguments.  The `combine` function intends to merge two number arrays.  However, if you pass it an array of strings, it throws an error.  The solution involves adding stronger type checking.