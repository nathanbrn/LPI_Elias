-- CreateTable
CREATE TABLE "vagas" (
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
    "destaque" BOOLEAN NOT NULL DEFAULT true
);
