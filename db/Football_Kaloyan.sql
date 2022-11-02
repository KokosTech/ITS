-- DB Football Creation - Kaloyan (VM-TESTING)

USE [master]
GO
/****** Object:  Database [Football]    Script Date: 9/26/2021 12:27:20 PM ******/
CREATE DATABASE [Football]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Football', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Football.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Football_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Football_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Football] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Football].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Football] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Football] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Football] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Football] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Football] SET ARITHABORT OFF 
GO
ALTER DATABASE [Football] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Football] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Football] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Football] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Football] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Football] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Football] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Football] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Football] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Football] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Football] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Football] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Football] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Football] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Football] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Football] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Football] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Football] SET RECOVERY FULL 
GO
ALTER DATABASE [Football] SET  MULTI_USER 
GO
ALTER DATABASE [Football] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Football] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Football] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Football] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Football] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Football] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Football', N'ON'
GO
ALTER DATABASE [Football] SET QUERY_STORE = OFF
GO
USE [Football]
GO
/****** Object:  Table [dbo].[Meets]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Meets](
	[ID] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[HID] [int] NULL,
	[GID] [int] NULL,
	[JID] [int] NOT NULL,
	[Date] [date] NULL,
	[HScore] [int] NOT NULL,
	[GScore] [int] NOT NULL,
 CONSTRAINT [PK_Meets] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Teams]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teams](
	[ID] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[Name] [nvarchar](50) NULL,
	[GID] [int] NOT NULL,
	[MID] [int] NULL,
 CONSTRAINT [PK_Teams] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[Query_4]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[Query_4] AS
	SELECT t.ID,
		SUM(CASE WHEN (t.ID = m.HID OR t.ID = m.GID) THEN 1 ELSE 0 END) AS meets,
		SUM(CASE WHEN ((m.HScore > m.GScore AND m.HID = t.ID) OR (m.HScore < m.GScore AND m.GID = t.ID)) THEN 1 ELSE 0 END ) as wins
	FROM Teams as t INNER JOIN Meets as m
	ON t.ID = m.HID OR t.ID = m.GID
	GROUP BY t.ID;
GO
/****** Object:  Table [dbo].[Groups]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Groups](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Groups] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Judges]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Judges](
	[ID] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[FName] [nvarchar](50) NULL,
	[LName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Judges] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Managers]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Managers](
	[ID] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[FName] [nvarchar](50) NULL,
	[LName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Managers] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Players]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Players](
	[ID] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[FName] [nvarchar](50) NULL,
	[LName] [nvarchar](50) NULL,
	[TID] [int] NULL,
 CONSTRAINT [PK_Players] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Groups] ON 
GO
INSERT [dbo].[Groups] ([ID], [Name]) VALUES (1, N'A')
GO
INSERT [dbo].[Groups] ([ID], [Name]) VALUES (2, N'B')
GO
INSERT [dbo].[Groups] ([ID], [Name]) VALUES (3, N'C')
GO
INSERT [dbo].[Groups] ([ID], [Name]) VALUES (4, N'D')
GO
INSERT [dbo].[Groups] ([ID], [Name]) VALUES (5, N'E')
GO
INSERT [dbo].[Groups] ([ID], [Name]) VALUES (6, N'F')
GO
SET IDENTITY_INSERT [dbo].[Groups] OFF
GO
SET IDENTITY_INSERT [dbo].[Judges] ON 
GO
INSERT [dbo].[Judges] ([ID], [FName], [LName]) VALUES (1, N'Judgino', N'Deliadro')
GO
INSERT [dbo].[Judges] ([ID], [FName], [LName]) VALUES (2, N'Duas', N'Judido')
GO
INSERT [dbo].[Judges] ([ID], [FName], [LName]) VALUES (3, N'Theious', N'Jeduin')
GO
INSERT [dbo].[Judges] ([ID], [FName], [LName]) VALUES (4, N'Jeddy', N'Quadino')
GO
INSERT [dbo].[Judges] ([ID], [FName], [LName]) VALUES (5, N'Mityo', N'Pishtovva')
GO
INSERT [dbo].[Judges] ([ID], [FName], [LName]) VALUES (6, N'Judino', N'Jediges')
GO
SET IDENTITY_INSERT [dbo].[Judges] OFF
GO
SET IDENTITY_INSERT [dbo].[Managers] ON 
GO
INSERT [dbo].[Managers] ([ID], [FName], [LName]) VALUES (1, N'Megiro', N'Monero')
GO
INSERT [dbo].[Managers] ([ID], [FName], [LName]) VALUES (2, N'Mengero', N'Megiro')
GO
INSERT [dbo].[Managers] ([ID], [FName], [LName]) VALUES (3, N'Menigere', N'De''Alpala')
GO
INSERT [dbo].[Managers] ([ID], [FName], [LName]) VALUES (4, N'Quadinni', N'Monjero')
GO
INSERT [dbo].[Managers] ([ID], [FName], [LName]) VALUES (5, N'Fotoni', N'Manjaro')
GO
INSERT [dbo].[Managers] ([ID], [FName], [LName]) VALUES (6, N'Lestava', N'El''monhero')
GO
SET IDENTITY_INSERT [dbo].[Managers] OFF
GO
SET IDENTITY_INSERT [dbo].[Meets] ON 
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (1, 3, 4, 5, CAST(N'2020-01-05' AS Date), 2, 3)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (2, 3, 5, 3, CAST(N'2020-05-09' AS Date), 5, 5)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (3, 3, 7, 1, CAST(N'2021-09-09' AS Date), 5, 2)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (4, 9, 3, 2, CAST(N'2021-08-21' AS Date), 10, 1)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (5, 3, 7, 3, CAST(N'2020-03-03' AS Date), 11, 1)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (6, 5, 7, 6, CAST(N'2020-07-09' AS Date), 2, 3)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (7, 7, 3, 3, CAST(N'2021-03-31' AS Date), 5, 7)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (8, 5, 7, 2, CAST(N'2020-01-01' AS Date), 5, 5)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (9, 7, 5, 3, CAST(N'2021-01-01' AS Date), 7, 5)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (10, 8, 4, 4, CAST(N'2021-03-05' AS Date), 8, 4)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (11, 3, 4, 3, CAST(N'2021-07-15' AS Date), 5, 3)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (12, 3, 4, 1, CAST(N'2021-05-05' AS Date), 3, 1)
GO
INSERT [dbo].[Meets] ([ID], [HID], [GID], [JID], [Date], [HScore], [GScore]) VALUES (13, 7, 9, 6, CAST(N'2020-05-05' AS Date), 4, 5)
GO
SET IDENTITY_INSERT [dbo].[Meets] OFF
GO
SET IDENTITY_INSERT [dbo].[Players] ON 
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (1, N'Helsinki', N'Monero', 4)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (2, N'Kepasa', N'Monero', 4)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (3, N'Govacci', N'Montechilli', 3)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (4, N'Gustavo', N'Kepasa', 5)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (5, N'Meniana', N'Mucic', 7)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (6, N'Moerto', N'Kepilic', 3)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (7, N'Italianovic', N'Pone', 5)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (8, N'Americano', N'Al''capone', 9)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (9, N'Sadly', N'I don''t have a team', NULL)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (10, N'Menjaro', N'Manjaro', 9)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (11, N'Mehito', N'Maltassa', 7)
GO
INSERT [dbo].[Players] ([ID], [FName], [LName], [TID]) VALUES (12, N'Pasta', N'Lekasa', 5)
GO
SET IDENTITY_INSERT [dbo].[Players] OFF
GO
SET IDENTITY_INSERT [dbo].[Teams] ON 
GO
INSERT [dbo].[Teams] ([ID], [Name], [GID], [MID]) VALUES (3, N'Footbolle Ittallle', 1, 2)
GO
INSERT [dbo].[Teams] ([ID], [Name], [GID], [MID]) VALUES (4, N'Italiano Monero', 2, 1)
GO
INSERT [dbo].[Teams] ([ID], [Name], [GID], [MID]) VALUES (5, N'Gustavic Footbole', 1, 6)
GO
INSERT [dbo].[Teams] ([ID], [Name], [GID], [MID]) VALUES (7, N'Muic', 3, 3)
GO
INSERT [dbo].[Teams] ([ID], [Name], [GID], [MID]) VALUES (8, N'Maniano', 3, 4)
GO
INSERT [dbo].[Teams] ([ID], [Name], [GID], [MID]) VALUES (9, N'Al''capone', 2, 5)
GO
SET IDENTITY_INSERT [dbo].[Teams] OFF
GO
/****** Object:  Index [UQ__Teams__C797348BCAB46E88]    Script Date: 9/26/2021 12:27:20 PM ******/
ALTER TABLE [dbo].[Teams] ADD UNIQUE NONCLUSTERED 
(
	[MID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Meets]  WITH CHECK ADD  CONSTRAINT [FK_Meets_Judges1] FOREIGN KEY([JID])
REFERENCES [dbo].[Judges] ([ID])
GO
ALTER TABLE [dbo].[Meets] CHECK CONSTRAINT [FK_Meets_Judges1]
GO
ALTER TABLE [dbo].[Meets]  WITH CHECK ADD  CONSTRAINT [FK_Meets_Teams] FOREIGN KEY([HID])
REFERENCES [dbo].[Teams] ([ID])
GO
ALTER TABLE [dbo].[Meets] CHECK CONSTRAINT [FK_Meets_Teams]
GO
ALTER TABLE [dbo].[Meets]  WITH CHECK ADD  CONSTRAINT [FK_Meets_Teams1] FOREIGN KEY([GID])
REFERENCES [dbo].[Teams] ([ID])
GO
ALTER TABLE [dbo].[Meets] CHECK CONSTRAINT [FK_Meets_Teams1]
GO
ALTER TABLE [dbo].[Players]  WITH CHECK ADD  CONSTRAINT [FK_Players_Teams] FOREIGN KEY([TID])
REFERENCES [dbo].[Teams] ([ID])
GO
ALTER TABLE [dbo].[Players] CHECK CONSTRAINT [FK_Players_Teams]
GO
ALTER TABLE [dbo].[Teams]  WITH CHECK ADD  CONSTRAINT [FK_Teams_Groups] FOREIGN KEY([GID])
REFERENCES [dbo].[Groups] ([ID])
GO
ALTER TABLE [dbo].[Teams] CHECK CONSTRAINT [FK_Teams_Groups]
GO
ALTER TABLE [dbo].[Teams]  WITH CHECK ADD  CONSTRAINT [FK_Teams_Managers] FOREIGN KEY([MID])
REFERENCES [dbo].[Managers] ([ID])
GO
ALTER TABLE [dbo].[Teams] CHECK CONSTRAINT [FK_Teams_Managers]
GO
/****** Object:  StoredProcedure [dbo].[Query_2]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Query_2] @tid int 
AS
SELECT 
	@tid as [team],
	SUM(
		CASE WHEN (
			(HScore > GScore AND HID = @tid) 
			OR 
			(HScore < GScore AND GID = @tid)
		) THEN 1
		ELSE 0
		END
	) AS wins,
	SUM(
		CASE WHEN (
			(HScore < GScore AND HID = @tid) 
			OR 
			(HScore > GScore  AND GID = @tid)
		)THEN 1
		ELSE 0
		END
	) AS losses,
	SUM(
		CASE WHEN (
			(HScore = GScore) 
			AND 
			(HID = @tid OR GID = @tid)
		) THEN 1
		ELSE 0
		END
	) AS draws
	FROM Meets;
GO
/****** Object:  StoredProcedure [dbo].[Query_5]    Script Date: 9/26/2021 12:27:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Query_5] @tid int, @date datetime 
AS
SELECT
	@tid as [team],
	@date as [date],
	SUM(
		CASE 
		WHEN ((HScore = GScore AND (HID = @tid OR GID = @tid)) AND [Date] < @date) THEN 1
		WHEN (((HScore > GScore AND HID = @tid) OR (HScore < GScore AND GID = @tid)) AND [Date] < @date) THEN 3
		ELSE  0 
		END 
	) as points
	FROM Meets
	WHERE HID = @tid OR GID = @tid;
GO
USE [master]
GO
ALTER DATABASE [Football] SET  READ_WRITE 
GO


-- QUERIES

USE [Football]
GO

-- QUICK INFO
-- FOR 1-1 Connection - used the QUNEQUE keyword when creating the following tables
-- 1-1 (at least imo) shoud be: Managers-Teams (can be NULL aka a team may not have a managers)

-- Last note - please give us a solution for editing a table without the need for dropping them, please

-- Q1
-- Every player of a given team [ID-3]

SELECT t.Name as [Team Name], p.FName as [First Name], p.LName as [Last Name]
FROM Players AS p
	INNER JOIN Teams AS t
	ON p.TID = t.ID
WHERE p.TID = 3;

-- Q2
-- Wins / Loses / Deaws of a given team [ID-3]

-- USED STACKOVERFLOW @ https://stackoverflow.com/questions/582637/sql-server-equivalent-of-a-countif-aggregate-function - aka counterpart in Excel - since we learned it last year in 9th grade

SELECT 
	SUM(
		CASE WHEN (
			(HScore > GScore AND HID = 3) 
			OR 
			(HScore < GScore AND GID = 3)
		) THEN 1
		ELSE 0
		END
	) AS wins,
	SUM(
		CASE WHEN (
			(HScore < GScore AND HID = 3) 
			OR 
			(HScore > GScore  AND GID = 3)
		)THEN 1
		ELSE 0
		END
	) AS losses,
	SUM(
		CASE WHEN (
			(HScore = GScore) 
			AND 
			(HID = 3 OR GID = 3)
		) THEN 1
		ELSE 0
		END
	) AS draws
FROM Meets;

-- Q2 With PROCEDURE (DON'T RUN - SAVED IN DB)

CREATE PROCEDURE Query_2 @tid int 
AS
SELECT 
	@tid as [team],
	SUM(
		CASE WHEN (
			(HScore > GScore AND HID = @tid) 
			OR 
			(HScore < GScore AND GID = @tid)
		) THEN 1
		ELSE 0
		END
	) AS wins,
	SUM(
		CASE WHEN (
			(HScore < GScore AND HID = @tid) 
			OR 
			(HScore > GScore  AND GID = @tid)
		)THEN 1
		ELSE 0
		END
	) AS losses,
	SUM(
		CASE WHEN (
			(HScore = GScore) 
			AND 
			(HID = @tid OR GID = @tid)
		) THEN 1
		ELSE 0
		END
	) AS draws
	FROM Meets;

--DROP PROCEDURE Query_5
--GO

-- Q2 With PROCEDURE (RUN)

EXEC Query_2 @tid = 3;

-- Q3
-- Latest (by ? - not given - nil) meets of a given team ordered by dates (if latest => DESC)

-- If the latest (aka TOP 5)

SELECT TOP(5) [Date], HID, GID
FROM Meets 
WHERE HID = 3 OR GID = 3
ORDER BY [Date] DESC;

-- If the all

SELECT [Date], HID, GID
FROM Meets 
WHERE HID = 3 OR GID = 3
ORDER BY [Date] DESC;

-- Q4 (VIEW-CODE) - DON'T RUN
-- All teams that have more than half of their meets won (aka wins > meets/2, not wins >= meets/2)

-- USED STACKOVERFLOW @ https://stackoverflow.com/questions/582637/sql-server-equivalent-of-a-countif-aggregate-function

CREATE VIEW Query_4 AS
	SELECT t.ID,
		SUM(
			CASE WHEN (
				t.ID = m.HID 
				OR 
				t.ID = m.GID
			) THEN 1
			ELSE 0
			END
		) AS meets,
		SUM(
			CASE WHEN (
				(
					m.HScore > m.GScore 
					AND 
					m.HID = t.ID
				) 
				OR 
				(
					m.HScore < m.GScore 
					AND 
					m.GID = t.ID
				)
			) THEN 1
			ELSE 0 
			END 
		) as wins
	FROM Teams as t 
		INNER JOIN 
		Meets as m
		ON t.ID = m.HID OR t.ID = m.GID
	GROUP BY t.ID;

--DROP VIEW Query_4;
--GO

-- Q4 - RUN

SELECT * FROM [Query_4] 
WHERE wins > (meets/2) 

-- Q5 (PROCEDURE-CODE) - DON'T RUN
-- USED STACKOVERFLOW @ https://stackoverflow.com/questions/582637/sql-server-equivalent-of-a-countif-aggregate-function

CREATE PROCEDURE Query_5 @tid int, @date datetime 
AS
SELECT
	@tid as [team],
	@date as [date],
	SUM(
		CASE 
		WHEN (
			(
				HScore = GScore 
				AND 
				(HID = @tid OR GID = @tid)
			) 
			AND 
			[Date] < @date
		) THEN 1
		WHEN (
			(
				(HScore > GScore AND HID = @tid) 
				OR 
				(HScore < GScore AND GID = @tid)
			) 
			AND 
			[Date] < @date
		) THEN 3
		ELSE  0 
		END 
	) as points
	FROM Meets
	WHERE HID = @tid OR GID = @tid;

-- Q5 RUN
		
EXEC Query_5 @tid = 3, @date = '2021-08-08';

--DROP PROCEDURE Query_5
--GO