import React from "react";

export default function AuthFormUI({
  login,
  email,
  password,
  setEmail,
  setPassword,
  error,
}) {
  return (
    <div className="mt-6">
      <form onSubmit={login}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-sm">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 border-blue-gray-200 focus:border-blue-gray-900"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="text-sm">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-blue-gray-200 focus:border-blue-gray-900"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md"
            onClick={login}
          >
            Se connecter
          </button>
        </div>
      </form>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
