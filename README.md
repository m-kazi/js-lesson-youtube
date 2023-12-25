# js-lesson-youtube

JS tutorial from chai aur code youtube channel.

# JavaScript Execution Context

    * Global Execution Context
    * Function Execution Context
    * Eval Execution Context

# JavaScript Execution Phase

    * Memory Creation Phase or Creation Phase
    * Execution Phase

# Execution Steps

    1. Global Execution / Global Env. always gets located into "this".
    2. Memory Phase - All variables are stored in here but it won't get executed. Such as:
        - var1 -> undefined for now
        - var2 -> undefined for now
        - function addNum -> definition for now

    3. Execution -
        - var1 = 5;
        - var2 = 2;
        - function addNum -> will create a New Execution context (New variable environment + Execution thread), after the work done it gets deleted.
            - Each time function will create Memory Phase & Execution phase inside New Execution Context.

# CallStack

    1. Global execution / Global env.
    2. Each funtion goes into Global env. -> run -> moved
    3. It follows LIFO: Last In First Out
