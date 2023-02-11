-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY,
    "href" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "auth" TEXT,
    "username" TEXT,
    "password" TEXT,
    "host" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "port" INTEGER,
    "path" TEXT,
    "pathname" TEXT,
    "search" TEXT,
    "hash" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLink" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY,
    "name" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Space" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY,
    "slug" TEXT,
    "name" TEXT,
    "type" TEXT NOT NULL DEFAULT 'PRIVATE',
    "listed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Space_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Link_href_key" ON "Link"("href");
