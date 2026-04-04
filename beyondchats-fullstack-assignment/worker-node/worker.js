const axios = require("axios");

const API_BASE_URL = "http://localhost:8000/api";

async function processTasks() {
  try {
    console.log("🔍 Fetching pending tasks...");

    const response = await axios.get(`${API_BASE_URL}/tasks`);
    const tasks = response.data;

    if (!tasks.length) {
      console.log("ℹ️ No pending tasks found");
      return;
    }

    for (const task of tasks) {
      if (task.status === "pending") {
        console.log(`⚙ Processing Task #${task.id}`);

        await axios.patch(`${API_BASE_URL}/tasks/${task.id}`, {
          status: "completed",
        });

        console.log(`✅ Task #${task.id} completed`);
      }
    }
  } catch (error) {
    console.error("❌ Worker error:", error.response?.status || error.message);
  }
}

// run every 5 seconds
setInterval(processTasks, 5000);
