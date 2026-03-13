import { useState } from "react";

export default function AuthModal({ onClose, onAuthSuccess }: {
  onClose: () => void,
  onAuthSuccess: (token: string, user_name: string, user_id: string) => void
}) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    profile_picture: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const endpoint = isLogin ? "/login" : "/create-user";
    const payload = isLogin
      ? { email: form.email, password: form.password }
      : {
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone || undefined,
          location: form.location || undefined,
          profile_picture: form.profile_picture || undefined
        };

    try {
      const res = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error inesperado");

      if (isLogin) {
        localStorage.setItem("adiumpoc_token", data.token);
        localStorage.setItem("user_name", data.name);
	      localStorage.setItem("user_email", form.email); // ⬅️ esta es la línea nueva
        const parsed = JSON.parse(atob(data.token.split(".")[1]));
        onAuthSuccess(data.token, data.name, parsed.user_id);
      } else {
        alert("Cuenta creada. Ahora inicia sesión.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
//    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm">
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-999">

      <div className="bg-white rounded-xl p-6 shadow-2xl w-full max-w-sm z-50">
        <h2 className="text-gray-700 bg-white text-xl font-bold mb-4 text-center">
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {!isLogin && (
            <>
              <input
                name="name"
                placeholder="Nombre"
                className="w-full border px-3 py-2 rounded text-gray-700 bg-white"
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Teléfono (opcional)"
                className="w-full border px-3 py-2 rounded  text-gray-700 bg-white"
                onChange={handleChange}
              />
              <input
                name="location"
                placeholder="Ubicación"
                className="w-full border px-3 py-2 rounded  text-gray-700 bg-white"
                onChange={handleChange}
              />
              <input
                name="profile_picture"
                placeholder="URL de foto de perfil"
                className="w-full border px-3 py-2 rounded  text-gray-700 bg-white"
                onChange={handleChange}
              />
            </>
          )}
          <input
            name="email"
            type="email"
            placeholder="Correo"
            className="w-full border px-3 py-2 rounded  text-gray-700 bg-white"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            className="w-full border px-3 py-2 rounded  text-gray-700 bg-white"
            onChange={handleChange}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Cargando..." : isLogin ? "Entrar" : "Crear cuenta"}
          </button>
        </form>
        <p className="text-gray-700 bg-white text-sm text-center mt-3">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 ml-1 underline"
          >
            {isLogin ? "Regístrate" : "Inicia sesión"}
          </button>
        </p>
        <button
          onClick={onClose}
          className="absolute translate-x-84 -translate-y-62 text-gray-500 hover:text-blue-600 text-2xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}

