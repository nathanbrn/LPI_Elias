/*
  Warnings:

  - Added the required column `link` to the `vagas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vagas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "senioridade" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "remuneracao" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requisitos" TEXT NOT NULL,
    "diferencial" TEXT NOT NULL,
    "beneficios" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_vagas" ("beneficios", "description", "destaque", "diferencial", "empresa", "hour", "id", "location", "remuneracao", "requisitos", "senioridade", "titulo", "type") SELECT "beneficios", "description", "destaque", "diferencial", "empresa", "hour", "id", "location", "remuneracao", "requisitos", "senioridade", "titulo", "type" FROM "vagas";
DROP TABLE "vagas";
ALTER TABLE "new_vagas" RENAME TO "vagas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
