const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.post("/create", async (request, response) => {
  try {
    const body = request.body;

    console.log(body);

    const data = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return response.status(200).json({
      message: "The user was created successfully!",
      data: data,
    });
  } catch (e) {
    console.log(e);
    return response.status(500).json({
      message: "Internal server error!",
    });
  }
});

router.get("/read-by-id", async (request, response) => {
  const userId = Number(request.query.userId);

  try {
    // Tip: We can interogate the database to search for that specific user id
    const data = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!data) {
      return response.status(404).json({
        message: `Couldn't find the user with id=${userId}`,
      });
    }

    return response.status(200).json(data);
  } catch (e) {
    return response.status(500).json({
      message: "Internal server error!",
    });
  }
});

module.exports = router;
