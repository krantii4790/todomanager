<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function store(Request $request)
    {
        $task = Task::create([
            'title' => $request->title,
            'payload' => $request->payload ?? [],
            'status' => 'pending',
        ]);

        return response()->json($task, 201);
    }

    public function update(Task $task)
    {
        $task->update([
            'status' => 'completed'
        ]);

        return response()->json($task);
    }

    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json([
            'message' => 'Task deleted successfully'
        ]);
    }
}
