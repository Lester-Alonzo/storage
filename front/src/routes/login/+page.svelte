<main>
    <h1 class="valodor">Admin</h1>
    <form method="POST" action="?/login">
        <label for="">User Name</label>
        <input type="text" name="username" placeholder="Username" autocomplete="username">
        <label for="">Password</label>
        <input type="password" name="passwrd" placeholder="*********" autocomplete="current-password">
        <button type="submit">login</button>
    </form>
</main>

<style>
    main {
        max-width: 100%;
        min-height: 100vh;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(102,77,227);
        background: linear-gradient(167deg, rgba(102,77,227,1) 0%, rgba(59,194,37,1) 49%, rgba(106,193,194,1) 100%);
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        gap: 1rem;
        background-color: rgba(255, 255, 255, 0.438);
        backdrop-filter: blur(10px);
        border-radius: 10px;
    }
    input {
        border: none;
        padding: .6rem;
        border-radius: 11px;
    }
    button {
        border: none;
        padding: .6rem;
        border-radius: 11px;
        background-color: #3bc225;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    .valodor {
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }
</style>