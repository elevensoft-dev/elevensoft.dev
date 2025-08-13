# 🚀 Header Moderno e Sofisticado

Um header premium com efeitos visuais avançados, menu dropdown responsivo e uma experiência de usuário excepcional.

## ✨ Funcionalidades

### 🎯 **Funcionalidades Principais**
- **Logo com efeito de brilho** - Hover com gradiente e blur
- **Menu dropdown inteligente** - Tooltips informativos para cada item
- **Menu mobile responsivo** - Hamburger animado (3 linhas → X)
- **Barra de progresso de scroll** - Indicador visual no topo
- **Efeitos de hover avançados** - Micro-interações e transições suaves
- **Backdrop blur** - Fundo translúcido com blur quando faz scroll

### 🎨 **Paleta de Cores**
- **Fundo Principal**: `bg-neutral-950` (#0a0a0a)
- **Fundo Secundário**: `bg-neutral-900/50 backdrop-blur-sm`
- **Bordas**: `border-neutral-800/50` (#262626)
- **Texto Secundário**: `text-neutral-300` (#d4d4d4)
- **Texto Principal**: `text-white`
- **Acentos Primários**: `from-orange-500 to-yellow-500` (gradientes)
- **Acentos Secundários**: `from-orange-400 to-yellow-400`
- **Hover States**: `hover:from-orange-600 hover:to-yellow-600`

## 📁 Estrutura de Arquivos

```
app/
├── components/
│   ├── header.tsx          # Header principal
│   └── ui/
│       └── scroll-progress.tsx  # Barra de progresso
├── hooks/
│   └── use-header.ts       # Hook para gerenciar estado
├── types/
│   └── header.ts           # Tipos TypeScript
└── demo-header/
    └── page.tsx            # Página de demonstração
```

## 🔧 Como Usar

### 1. Importar o Header

```tsx
import Header from "../components/header";

export default function MinhaPagina() {
  return (
    <div>
      <Header />
      {/* Seu conteúdo aqui */}
    </div>
  );
}
```

### 2. Configurar o Menu

O header usa automaticamente os dados do arquivo `components/Header/menuData.tsx`. 
Para personalizar, edite esse arquivo:

```tsx
export const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Produtos",
    submenu: [
      {
        id: 21,
        title: "Produto 1",
        path: "/produto-1",
      },
      // ... mais itens
    ],
  },
  // ... mais itens
];
```

### 3. Personalizar Cores e Estilos

Edite as classes Tailwind no arquivo `header.tsx` para personalizar:

```tsx
// Exemplo de personalização de cores
className="bg-gradient-to-r from-blue-500 to-purple-500" // Mudar gradiente
className="text-blue-400" // Mudar cor do texto
```

## 📱 Responsividade

- **Mobile**: < 768px (lg)
- **Tablet**: 768px - 1023px (md a lg)  
- **Desktop**: ≥ 1024px (lg)

## 🎭 Efeitos Visuais

### **Transições**
- `transition-all duration-300` - Transições suaves
- `hover:scale-110` - Efeito de escala no hover
- `hover:translate-x-1` - Movimento sutil no hover

### **Scroll Effects**
- Fundo transparente → translúcido com blur
- Barra de progresso animada
- Sombra e bordas ao fazer scroll

### **Dropdowns**
- Animação de entrada/saída
- Tooltips com setas
- Sombras e blur de fundo

### **Mobile Menu**
- Abertura/fechamento com animação de altura
- Hamburger animado (3 linhas → X)
- Transições suaves

## 🚀 Personalização Avançada

### **Hook Personalizado**

O header usa o hook `useHeader` que você pode estender:

```tsx
import { useHeader } from "../hooks/use-header";

const {
  isScrolled,
  isMobileMenuOpen,
  activeDropdown,
  scrollProgress,
  toggleDropdown,
  toggleMobileMenu,
} = useHeader();
```

### **Estados Disponíveis**

- `isScrolled`: Boolean - Se a página foi scrollada
- `isMobileMenuOpen`: Boolean - Se o menu mobile está aberto
- `activeDropdown`: String | null - ID do dropdown ativo
- `scrollProgress`: Number - Progresso do scroll (0-100)

### **Ações Disponíveis**

- `toggleDropdown(id)`: Alterna dropdown específico
- `closeDropdowns()`: Fecha todos os dropdowns
- `toggleMobileMenu()`: Alterna menu mobile
- `closeMobileMenu()`: Fecha menu mobile

## 🎨 Componentes UI

### **ScrollProgress**

```tsx
import { ScrollProgress } from "./ui/scroll-progress";

<ScrollProgress progress={scrollProgress} />
```

**Props:**
- `progress`: Number (0-100) - Progresso do scroll

## 🔍 Debug e Testes

### **Página de Demonstração**

Acesse `/demo-header` para testar todas as funcionalidades:

- Scroll para ver mudanças no header
- Teste menu dropdown no desktop
- Teste menu mobile em telas pequenas
- Verifique barra de progresso

### **Console Logs**

Adicione logs para debug:

```tsx
const { isScrolled, scrollProgress } = useHeader();

useEffect(() => {
  console.log('Scroll:', isScrolled, 'Progress:', scrollProgress);
}, [isScrolled, scrollProgress]);
```

## 🐛 Solução de Problemas

### **Menu não abre no mobile**
- Verifique se o hook está funcionando
- Confirme se `isMobileMenuOpen` está mudando

### **Dropdowns não funcionam**
- Verifique se `data-dropdown` está presente
- Confirme se `activeDropdown` está sendo atualizado

### **Barra de progresso não aparece**
- Verifique se `scrollProgress` está sendo calculado
- Confirme se o componente `ScrollProgress` está sendo renderizado

## 📚 Dependências

- **React 18+** - Hooks e componentes
- **Next.js 13+** - Roteamento e otimizações
- **Tailwind CSS** - Estilização
- **TypeScript** - Tipagem

## 🎯 Melhorias Futuras

- [ ] Animações de entrada para dropdowns
- [ ] Suporte a temas claro/escuro
- [ ] Navegação por teclado
- [ ] Animações de página
- [ ] Suporte a múltiplos idiomas

## 📄 Licença

Este componente segue as mesmas licenças do projeto principal. 