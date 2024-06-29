import React from "react";
import {
  Box,
  Card,
  CardContent,
  Sheet,
  Stack,
  Typography,
  Button,
} from "@mui/joy";
import { FaTasks } from "react-icons/fa";

export const TasksPage = () => {
  const tasks = [
    {
      id: 1,
      task: "Préparer les dossiers des patients pour les consultations de demain",
      dueDate: "2024-05-19 17:00",
    },
    {
      id: 2,
      task: "Répondre aux messages des patients",
      dueDate: "2024-05-20 16:00",
    },
    {
      id: 3,
      task: "Mettre à jour les dossiers médicaux",
      dueDate: "2024-05-21 12:00",
    },
  ];

  const handleCompleteTask = (taskId) => {
    // Logic to mark the task as complete
    console.log(`Task ${taskId} completed`);
  };

  return (
    <Sheet
      sx={{ bgcolor: "#f4f6f8", p: 4, borderRadius: "md", boxShadow: "lg" }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        <FaTasks style={{ marginRight: 10 }} /> Mes Tâches
      </Typography>
      <Stack spacing={4}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            variant="outlined"
            sx={{
              boxShadow: "lg",
              bgcolor: "white",
              borderColor: task.dueDate < "2024-05-21" ? "#d32f2f" : "#1976d2",
            }}
          >
            <CardContent>
              <Typography level="body1" sx={{ mb: 1, color: "#1976d2" }}>
                {task.task}
              </Typography>
              <Typography level="body2" color="textSecondary">
                Échéance : {task.dueDate}
              </Typography>
              <Button
                variant="solid"
                color="primary"
                sx={{ mt: 2, backgroundColor: "#388e3c" }}
                onClick={() => handleCompleteTask(task.id)}
              >
                Marquer comme complète
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Sheet>
  );
};

export default TasksPage;
