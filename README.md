# React Starter

Proyecto base con Vite + React configurado para desarrollo moderno.

## 🧰 Requisitos

- Node.js 18+
- npm 9+

## 🚀 Comandos

| Acción                        | Comando           |
| ----------------------------- | ----------------- |
| Iniciar entorno de desarrollo | `npm run dev`     |
| Compilar para producción      | `npm run build`   |
| Previsualizar build           | `npm run preview` |
| Revisar errores de lint       | `npm run lint`    |
| Formatear código              | `npm run format`  |

## 📂 Estructura del proyecto

src/
assets/ # imágenes, fuentes, svg
components/ # componentes UI pequeños
features/ # módulos funcionales grandes
hooks/ # custom hooks reutilizables
lib/ # funciones utilitarias
pages/ # páginas para routing
styles/ # CSS global o Tailwind base

## 🧱 Configuración

- **ESLint + Prettier + EditorConfig** integrados para mantener estilo consistente.
- **Husky** ejecuta verificación antes de cada commit.

## 🔧 Alias de import

```js
import Component from '@/components/Button'
Configurado en vite.config.js para apuntar a src/.

```
