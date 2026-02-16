# HubX Frontend Assignment

Bu repo, HubX Frontend Case tasarımının **responsive (mobile-first)** şekilde uygulanmış halidir. Sayfa; altta sekmeli bir navigation (tab bar) üzerinden seçilen “feature”a göre **telefon mockup + metin alanı** içeriğini değiştirir. Veri tarafı gerçek bir API gibi simüle edilmiştir.

Projenin Demosunu Görmek İçin:
[Projenin Demo Linki](hubx-case-example.netlify.app)

## Tasarım referansları

- **Figma**: `https://www.figma.com/file/fqq3IGqxAiIUEItAWHZ54W/Frontend-Case-(HubX)?type=design&node-id=896%3A263&mode=design&t=7TvYeaXudwa3TGy5-1`

## Kullanılan teknolojiler (neden?)

- **React 18 + TypeScript**: Bileşen bazlı UI ve güvenli tip sistemi.
- **Vite**: Hızlı geliştirme server’ı ve build.
- **@tanstack/react-query**: “Server state” (veri çekme, cache, loading/error, refetch) yönetimi.
- **framer-motion**: Tab geçişlerinde ve mockup görsellerinde akıcı animasyonlar.
- **CSS Modules**: Component bazlı, çakışmayan stil isimleri.
- **ESLint + Prettier + Stylelint**: Kod kalitesi + format standardı.

## Projeyi çalıştırma

### Gereksinimler

- Node.js (LTS önerilir)
- **NOT:** Proje içinde komutlar npm ile tanımlanmıştır ama biz kullanırken pnpm ile projeyi çalıştırdık.

### Kurulum

```sh
npm install or pnpm install
```

### Development server

```sh
npm run dev or pnpm run dev
```

### Build

```sh
npm run build or pnpm run build
```

### Build preview

```sh
npm run preview or pnpm run preview
```

## Kod kalite komutları

### Lint

```sh
npm run lint or pnpm run lint
```

Bu komut şunları çalıştırır:

- `lint:eslint`: ESLint (TS/React kuralları)
- `lint:typescript`: `tsc --noEmit` (type-check)
- `lint:stylelint`: CSS lint

### Format

```sh
npm run format or pnpm run format
```

Bu komut şunları çalıştırır:

- `format:prettier`: Prettier ile formatlar
- `format:stylelint`: Stylelint auto-fix (mümkün olan yerde)

## Klasör yapısı

```text
.
├─ App.tsx
├─ index.html
├─ src/
│  ├─ main.tsx
│  ├─ index.ts
│  ├─ Content.tsx
│  ├─ FeatureContent.tsx
│  ├─ api/
│  │  └─ features.ts
│  ├─ hooks/
│  │  └─ useFeatures.ts
│  ├─ constants/
│  │  ├─ Features/
│  │  │  └─ features.data.ts
│  │  └─ BottomBar/
│  │     ├─ BottomBar.constants.ts
│  │     └─ index.ts
│  ├─ components/
│  │  ├─ BottomTabs.tsx
│  │  ├─ PhoneMockup.tsx
│  │  ├─ IntroductionBlock.tsx
│  │  ├─ FeaturesLoading.tsx
│  │  ├─ FeaturesError.tsx
│  │  └─ index.ts
│  ├─ shared/
│  │  └─ components/
│  │     ├─ Button/
│  │     │  ├─ Button.tsx
│  │     │  ├─ Button.module.css
│  │     │  └─ index.ts
│  │     └─ icons/
│  │        ├─ *.tsx
│  │        └─ index.ts
│  ├─ styles/
│  │  ├─ App.module.css
│  │  ├─ BottomTabs.module.css
│  │  ├─ IntroductionBlock.module.css
│  │  └─ PhoneMockup.module.css
│  ├─ FeatureContent.module.css
│  ├─ styles.css
│  ├─ types/
│  │  ├─ types.ts
│  │  └─ index.ts
│  └─ assets/ (png'ler)
└─ ...
```

## Uygulama giriş noktası ve genel akış

### `index.html`

- `#root` container’ı vardır.
- Vite üzerinden `src/main.tsx` yüklenir.

### `src/main.tsx`

- React 18 `createRoot` ile uygulamayı `#root`’a render eder.
- `QueryClientProvider` ile React Query global context’i sağlar.
- `QueryClient` default’unda `staleTime` ayarlanmıştır (veri 5 dakika “fresh” kabul edilir).
- Global stil için `src/styles.css` import edilir.

### `App.tsx`

- Uygulamanın outer layout’unu kurar (`styles.main`).
- Asıl ekran: `Content`.

## Veri katmanı

### `src/constants/Features/features.data.ts`

- Uygulamada gösterilen feature listesi burada tanımlıdır (`IFeature[]`).
- Her feature; başlıklar, açıklama, tab label, icon component’i ve mockup görsellerini içerir.
- Bazı feature’larda ekstra görseller vardır:
  - **Sign & Stamp**: `overlayImages` (sign + stamp)
  - **Batch Scanning**: `paperImage` (3 katmanlı kağıt efekti)
  - **Advanced Filters**: `brightnessImage`, `contrastImage`
  - **Export & Share**: `exportIcons` (ok + file ikonları)

### `src/api/features.ts`

- `fetchFeatures()` fonksiyonu gerçek API çağrısını simüle eder.
- `setTimeout` ile küçük bir gecikme eklenir ve `FEATURES` resolve edilir.
- Amaç: UI tarafında loading/error state’lerini gerçekçi şekilde gösterebilmek.

### `src/hooks/useFeatures.ts`

- React Query `useQuery` ile `fetchFeatures()` çağrılır.
- `queryKey: ['features']` cache anahtarıdır.
- Bu hook; `data`, `isLoading`, `isError`, `error`, `refetch` gibi alanları sağlar.

## UI katmanı

### `src/Content.tsx`

- Feature listesini `useFeatures()` ile çekmek
- Loading/error durumlarını yönetmek
- Aktif tab state’ini (`activeTabId`) tutmak
- İçeriği iki parçaya ayırmak:
  - Üst alan: `FeatureContent` (telefon + açıklama)
  - Alt alan: `BottomTabs` (tab bar)

Ekran durumları:

- **Loading** → `FeaturesLoading`
- **Error** → `FeaturesError` (retry ile `refetch`)
- **Success** → `FeatureContent` + `BottomTabs`

### `src/FeatureContent.tsx`

- `activeTabId` ile seçili feature’ı bulmak
- Telefon mockup’ını `PhoneMockup` ile çizmek
- Metin/CTA alanını `IntroductionBlock` ile göstermek
- Tab değişimlerinde geçiş animasyonlarını yönetmek:
  - `AnimatePresence mode="wait"` + `key` ile eski içerik çıkarken yenisi bekletilir
  - `motion.div` ile fade/translate animasyonları uygulanır

## UI bileşenleri

### `src/components/BottomTabs.tsx`

- Altta görünen tab bar.
- `features` listesinden tab item’ları üretilir (id, label, Icon).
- Her tab bir `Button` (variant: `tab`) olarak render edilir.
- Aktif tab’da:
  - İkon rengi `ACTIVE_COLOR`
  - Arkaplan farklı
  - İkon etrafındaki ring (SVG circle) animasyonla çizilir

### `src/components/PhoneMockup.tsx`

- Figma’daki telefon görselini ve opsiyonel overlay’leri konumlandırır.
- `window.innerWidth <= 768` ile mobil/desktop davranışları ayrılır.
- Opsiyonel katmanlar:
  - `paperImage` varsa 3 katmanlı kağıt animasyonu
  - `overlayImages` varsa sign/stamp overlay
  - `brightnessImage` / `contrastImage` varsa slider overlay
  - `exportIcons` varsa export ikonları
- `framer-motion` ile her katman için delay’li animasyonlar kullanılır.

### `src/components/IntroductionBlock.tsx`

- Başlık, alt başlık, açıklama ve CTA butonu.
- İçerik tab değişiminde fade-in/fade-out olacak şekilde `motion.div` kullanır.

### `src/components/FeaturesLoading.tsx` ve `src/components/FeaturesError.tsx`

- Basit durum bileşenleri.
- Verinin yüklenme durumlarına göre güvenli şekilde gösterilir.

## Shared bileşenler

### `src/shared/components/Button/Button.tsx`

Tek `Button` component’i iki amaçla kullanılır:

- **Link gibi**: `href` verilirse `<a>` render eder (CTA).
- **Buton gibi**: `onClick` verilirse `<button>` render eder (tab).

### `src/shared/components/icons/*`

- Tab ikonları SVG olarak React component’i şeklindedir.
- `color` prop’u ile aktif/pasif renk uygulanır.

## Tipler (TypeScript)

### `src/types/types.ts`

- UI ve data modelini tanımlar:
  - `IFeature`, `IBottomTabsProps`, `IFeatureContentProps`, `IPhoneMockupProps`, `IIntroductionBlockProps` vb.
- Props tipleri sayesinde component’ler arası veri akışı güvenli olur.

## Stil yaklaşımı

- `*.module.css` dosyaları CSS Modules ile import edilir.
- Responsive kurallar genellikle:
  - `@media (width <= 1024px)` tablet
  - `@media (width <= 768px)` mobile

## Animasyon yaklaşımı

- Tab değişimlerinde:
  - `AnimatePresence mode="wait"` ile “exit bitmeden enter başlamasın” davranışı
  - `key` değişimi ile içerik yeniden mount edilip animasyon tetiklenir
- Telefon mockup katmanlarında:
  - Farklı delay’ler ile sırayla belirme efekti
  - Mobil ve desktop için farklı initial/animate değerleri

## Erişilebilirlik (A11y)

- Tab bar:
  - `nav role="tablist" aria-label="Features"`
  - Tab butonlarında `role="tab"`
  - `aria-selected` aktifliği bildirir (Button içinde set edilir)
- Loading/Error:
  - `role="status"` ve `role="alert"`

## Konfigürasyon notları

- `vite.config.ts` içinde `@` alias’ı tanımlı.
