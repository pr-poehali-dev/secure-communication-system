import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "problem" },
  { id: 3, type: "integrity" },
  { id: 4, type: "signature" },
  { id: 5, type: "architecture" },
  { id: 6, type: "crypto" },
  { id: 7, type: "algorithms" },
  { id: 8, type: "userflow" },
  { id: 9, type: "verification" },
  { id: 10, type: "application" },
  { id: 11, type: "risks" },
  { id: 12, type: "conclusion" },
];

const SlideHeader = ({ num, title }: { num: string; title: string }) => (
  <div className="flex items-start justify-between mb-6">
    <div>
      <div className="text-xs font-mono text-gray-300 mb-1">{num} / 12</div>
      <h2 className="text-2xl font-semibold text-gray-950 tracking-tight">{title}</h2>
    </div>
    <div className="text-xs font-mono text-gray-300 text-right">ПГУТИ · 2026</div>
  </div>
);

const SlideTitle = () => (
  <div className="h-full flex flex-col justify-between p-16 relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-950" />
    <div className="relative z-10 flex justify-between items-start">
      <div className="text-xs font-mono text-gray-400 tracking-widest uppercase">ПГУТИ · 2026</div>
    </div>
    <div className="relative z-10 max-w-3xl">
      <h1 className="text-6xl font-semibold leading-tight text-gray-950 mb-6 tracking-tight">
        Разработка системы<br />защищённой<br />коммуникации
      </h1>
      <p className="text-2xl font-light text-gray-500 mb-8">Контроль целостности и подлинность сообщений</p>
      <div className="w-16 h-px bg-gray-950 mb-8" />
      <div className="space-y-1">
        <div className="text-base text-gray-700 font-medium">Поваров Максим Константинович</div>
        <div className="text-sm text-gray-500">Науч. рук.: Евстафьева Виолетта Андреевна</div>
        <div className="text-sm text-gray-400 font-mono mt-2">ПГУТИ · г. Самара · 2026</div>
      </div>
    </div>
    <div className="relative z-10 grid grid-cols-3 gap-8 border-t border-gray-200 pt-6">
      {["Целостность", "Подлинность", "Криптография"].map((t) => (
        <div key={t} className="text-xs font-mono text-gray-400 uppercase tracking-widest">{t}</div>
      ))}
    </div>
  </div>
);

const SlideProblem = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="02" title="Проблема" />
    <div className="flex-1 flex gap-12 items-center">
      <div className="flex-1 space-y-6">
        <p className="text-2xl font-light text-gray-800 leading-relaxed">
          Передача данных по открытым каналам создаёт два ключевых риска:
        </p>
        <div className="space-y-4">
          {[
            { icon: "AlertTriangle", label: "Искажение содержимого", desc: "Данные могут быть изменены при передаче без ведома получателя" },
            { icon: "UserX", label: "Подмена отправителя", desc: "Злоумышленник может выдать себя за легитимного участника" },
            { icon: "ShieldOff", label: "Отсутствие общего секрета", desc: "Стороны не могут заранее договориться о ключах в недоверенной среде" },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 items-start p-4 border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="w-8 h-8 border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name={item.icon} size={14} className="text-gray-600" />
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-72 flex-shrink-0">
        <svg viewBox="0 0 300 340" className="w-full" fill="none">
          <rect x="70" y="20" width="160" height="46" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="150" y="47" textAnchor="middle" fontSize="11" fill="#111" fontFamily="IBM Plex Sans">Отправитель</text>
          <line x1="150" y1="66" x2="150" y2="106" stroke="#111" strokeWidth="1" strokeDasharray="4 3"/>
          <rect x="50" y="106" width="200" height="50" rx="2" stroke="#c00" strokeWidth="1.5" fill="#fff5f5"/>
          <text x="150" y="128" textAnchor="middle" fontSize="10" fill="#c00" fontFamily="IBM Plex Sans">Открытый канал</text>
          <text x="150" y="146" textAnchor="middle" fontSize="9" fill="#c00" fontFamily="IBM Plex Mono">⚠ уязвимость</text>
          <line x1="150" y1="156" x2="150" y2="196" stroke="#111" strokeWidth="1" strokeDasharray="4 3"/>
          <rect x="70" y="196" width="160" height="46" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="150" y="223" textAnchor="middle" fontSize="11" fill="#111" fontFamily="IBM Plex Sans">Получатель</text>
          <text x="150" y="280" textAnchor="middle" fontSize="10" fill="#888" fontFamily="IBM Plex Sans">Нет гарантий:</text>
          <text x="150" y="298" textAnchor="middle" fontSize="10" fill="#c00" fontFamily="IBM Plex Sans">— целостности</text>
          <text x="150" y="316" textAnchor="middle" fontSize="10" fill="#c00" fontFamily="IBM Plex Sans">— подлинности</text>
          <path d="M190 131 L250 111 L250 166 L190 151Z" fill="#fff0f0" stroke="#e00" strokeWidth="1"/>
          <text x="256" y="134" fontSize="8" fill="#c00" fontFamily="IBM Plex Sans">Атака</text>
          <text x="256" y="148" fontSize="8" fill="#c00" fontFamily="IBM Plex Sans">MITM</text>
        </svg>
      </div>
    </div>
  </div>
);

const SlideIntegrity = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="03" title="Контроль целостности сообщений" />
    <div className="flex-1 flex gap-10 items-start">
      <div className="flex-1">
        <p className="text-xl font-light text-gray-700 mb-6 leading-relaxed">
          Целостность — гарантия того, что данные не изменились с момента отправки. Обеспечивается через хеш-функции.
        </p>
        <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
          <div className="text-xs font-mono text-gray-500 mb-2">ПРИНЦИП</div>
          <div className="font-mono text-base text-gray-800">hash(M) → H</div>
          <div className="text-sm text-gray-400 mt-1">Любое изменение M → другой хеш H'</div>
        </div>
        <div className="space-y-3">
          {[
            "Хеш-функция детерминирована — одинаковый вход даёт одинаковый выход",
            "Необратима — по хешу нельзя восстановить исходное сообщение",
            "Чувствительна — изменение 1 бита меняет весь хеш",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-6 h-6 bg-gray-950 text-white text-xs flex items-center justify-center font-mono flex-shrink-0 mt-0.5">{i + 1}</div>
              <div className="text-base text-gray-600">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-96 flex-shrink-0">
        <svg viewBox="0 0 380 300" className="w-full" fill="none">
          <text x="10" y="16" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">СХЕМА КОНТРОЛЯ ЦЕЛОСТНОСТИ</text>
          <rect x="10" y="30" width="120" height="40" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="70" y="54" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Sans">Сообщение M</text>
          <line x1="130" y1="50" x2="180" y2="50" stroke="#111" strokeWidth="1" markerEnd="url(#ci1)"/>
          <rect x="180" y="30" width="80" height="40" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="220" y="54" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Mono">hash()</text>
          <line x1="260" y1="50" x2="310" y2="50" stroke="#111" strokeWidth="1" markerEnd="url(#ci1)"/>
          <rect x="310" y="30" width="60" height="40" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="340" y="54" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Mono">H(M)</text>
          <line x1="70" y1="70" x2="70" y2="130" stroke="#111" strokeWidth="1" strokeDasharray="3 2"/>
          <text x="80" y="108" fontSize="9" fill="#999" fontFamily="IBM Plex Sans">передача</text>
          <rect x="10" y="140" width="120" height="40" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="70" y="164" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Sans">Сообщение M'</text>
          <line x1="130" y1="160" x2="180" y2="160" stroke="#111" strokeWidth="1" markerEnd="url(#ci1)"/>
          <rect x="180" y="140" width="80" height="40" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="220" y="164" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Mono">hash()</text>
          <line x1="260" y1="160" x2="310" y2="160" stroke="#111" strokeWidth="1" markerEnd="url(#ci1)"/>
          <rect x="310" y="140" width="60" height="40" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="340" y="164" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Mono">H(M')</text>
          <line x1="340" y1="70" x2="340" y2="140" stroke="#ccc" strokeWidth="1" strokeDasharray="3 2"/>
          <rect x="280" y="210" width="100" height="50" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="330" y="232" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Sans">Сравнение</text>
          <text x="330" y="248" textAnchor="middle" fontSize="9" fill="#555" fontFamily="IBM Plex Mono">H == H' ?</text>
          <line x1="340" y1="180" x2="340" y2="210" stroke="#111" strokeWidth="1" markerEnd="url(#ci1)"/>
          <rect x="20" y="218" width="55" height="32" rx="2" stroke="#090" strokeWidth="1.5" fill="#f0fff0"/>
          <text x="47" y="238" textAnchor="middle" fontSize="9" fill="#090" fontFamily="IBM Plex Sans">ДА ✓</text>
          <rect x="85" y="218" width="80" height="32" rx="2" stroke="#c00" strokeWidth="1.5" fill="#fff5f5"/>
          <text x="125" y="238" textAnchor="middle" fontSize="9" fill="#c00" fontFamily="IBM Plex Sans">НЕТ — изменён</text>
          <defs>
            <marker id="ci1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6Z" fill="#111"/>
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

const SlideSignature = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="04" title="Электронная подпись и подлинность" />
    <div className="flex-1 flex gap-10 items-start">
      <div className="flex-1 space-y-4">
        <p className="text-xl font-light text-gray-700 leading-relaxed">
          Электронная подпись связывает сообщение с ключом отправителя — без предварительного обмена секретом.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Закрытый ключ", icon: "KeyRound", desc: "Только у отправителя. Создаёт подпись." },
            { label: "Открытый ключ", icon: "Key", desc: "Доступен всем. Проверяет подпись." },
            { label: "Подпись Sign()", icon: "PenLine", desc: "Encrypt(hash(M), private_key)" },
            { label: "Верификация", icon: "CheckCircle", desc: "Decrypt(sig, public_key) == hash(M)" },
          ].map((item) => (
            <div key={item.label} className="border border-gray-200 p-3 space-y-1">
              <div className="flex items-center gap-2">
                <Icon name={item.icon} size={14} className="text-gray-500" />
                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">{item.label}</span>
              </div>
              <div className="text-sm font-mono text-gray-800">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-96 flex-shrink-0">
        <svg viewBox="0 0 380 320" className="w-full" fill="none">
          <text x="10" y="16" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">ФОРМИРОВАНИЕ ПОДПИСИ</text>
          <rect x="10" y="30" width="110" height="36" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="65" y="52" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Sans">Сообщение M</text>
          <line x1="120" y1="48" x2="150" y2="48" stroke="#111" strokeWidth="1" markerEnd="url(#sg1)"/>
          <rect x="150" y="32" width="70" height="32" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="185" y="50" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Mono">hash(M)</text>
          <line x1="220" y1="48" x2="250" y2="48" stroke="#111" strokeWidth="1" markerEnd="url(#sg1)"/>
          <rect x="250" y="32" width="80" height="32" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="290" y="50" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Mono">H(M)</text>
          <rect x="10" y="100" width="110" height="36" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="65" y="115" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Mono">Закрытый</text>
          <text x="65" y="128" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Mono">ключ K_priv</text>
          <line x1="120" y1="118" x2="230" y2="70" stroke="#111" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#sg1)"/>
          <rect x="230" y="100" width="120" height="36" rx="2" stroke="#111" strokeWidth="2" fill="white"/>
          <text x="290" y="115" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Mono">Sign(H, K_priv)</text>
          <text x="290" y="129" textAnchor="middle" fontSize="9" fill="#555" fontFamily="IBM Plex Mono">= Подпись S</text>
          <line x1="290" y1="136" x2="290" y2="170" stroke="#111" strokeWidth="1" markerEnd="url(#sg1)"/>
          <line x1="65" y1="66" x2="65" y2="170" stroke="#111" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#sg1)"/>
          <rect x="20" y="170" width="340" height="50" rx="2" stroke="#111" strokeWidth="1.5" fill="#fafafa"/>
          <text x="190" y="192" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Sans">Пакет: M + S</text>
          <text x="190" y="208" textAnchor="middle" fontSize="9" fill="#888" fontFamily="IBM Plex Mono">сообщение + цифровая подпись</text>
          <line x1="190" y1="220" x2="190" y2="252" stroke="#111" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#sg1)"/>
          <rect x="80" y="252" width="220" height="36" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="190" y="274" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Sans">Получатель → Верификация</text>
          <defs>
            <marker id="sg1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6Z" fill="#111"/>
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

const SlideArchitecture = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="05" title="Архитектура системы" />
    <div className="flex-1 flex items-center justify-center">
      <svg viewBox="0 0 700 360" className="w-full max-w-3xl" fill="none">
        <text x="350" y="16" textAnchor="middle" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">СТРУКТУРА КОМПОНЕНТОВ</text>
        <rect x="10" y="30" width="160" height="160" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
        <text x="90" y="50" textAnchor="middle" fontSize="10" fill="#555" fontFamily="IBM Plex Mono" letterSpacing="1">ОТПРАВИТЕЛЬ</text>
        <rect x="20" y="60" width="140" height="30" rx="1" stroke="#ccc" strokeWidth="1" fill="#f9f9f9"/>
        <text x="90" y="79" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Sans">Ввод сообщения</text>
        <rect x="20" y="100" width="140" height="30" rx="1" stroke="#ccc" strokeWidth="1" fill="#f9f9f9"/>
        <text x="90" y="119" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Mono">hash(M) → H</text>
        <rect x="20" y="140" width="140" height="30" rx="1" stroke="#ccc" strokeWidth="1" fill="#f9f9f9"/>
        <text x="90" y="159" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Mono">Sign(H, K_priv)</text>
        <rect x="270" y="30" width="160" height="160" rx="2" stroke="#111" strokeWidth="2" fill="white"/>
        <text x="350" y="50" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Mono" letterSpacing="1">КАНАЛ СВЯЗИ</text>
        <rect x="280" y="60" width="140" height="30" rx="1" stroke="#ccc" strokeWidth="1" fill="#f9f9f9"/>
        <text x="350" y="75" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Sans">Транспорт пакета</text>
        <text x="350" y="87" textAnchor="middle" fontSize="8" fill="#888" fontFamily="IBM Plex Mono">M + S + cert</text>
        <rect x="280" y="100" width="140" height="30" rx="1" stroke="#c00" strokeWidth="1" fill="#fff8f8"/>
        <text x="350" y="119" textAnchor="middle" fontSize="9" fill="#c00" fontFamily="IBM Plex Sans">Открытая сеть</text>
        <rect x="280" y="140" width="140" height="30" rx="1" stroke="#ccc" strokeWidth="1" fill="#f9f9f9"/>
        <text x="350" y="159" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Sans">Без общих секретов</text>
        <rect x="530" y="30" width="160" height="160" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
        <text x="610" y="50" textAnchor="middle" fontSize="10" fill="#555" fontFamily="IBM Plex Mono" letterSpacing="1">ПОЛУЧАТЕЛЬ</text>
        <rect x="540" y="60" width="140" height="30" rx="1" stroke="#ccc" strokeWidth="1" fill="#f9f9f9"/>
        <text x="610" y="79" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Sans">Приём пакета</text>
        <rect x="540" y="100" width="140" height="30" rx="1" stroke="#ccc" strokeWidth="1" fill="#f9f9f9"/>
        <text x="610" y="119" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Mono">Verify(S, K_pub)</text>
        <rect x="540" y="140" width="140" height="30" rx="1" stroke="#090" strokeWidth="1" fill="#f0fff4"/>
        <text x="610" y="159" textAnchor="middle" fontSize="9" fill="#090" fontFamily="IBM Plex Sans">Результат ✓ / ✗</text>
        <line x1="170" y1="110" x2="270" y2="110" stroke="#111" strokeWidth="1.5" markerEnd="url(#ar1)"/>
        <line x1="430" y1="110" x2="530" y2="110" stroke="#111" strokeWidth="1.5" markerEnd="url(#ar1)"/>
        <rect x="10" y="230" width="680" height="100" rx="2" stroke="#eee" strokeWidth="1" fill="#fafafa"/>
        <text x="350" y="250" textAnchor="middle" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">КРИПТОГРАФИЧЕСКИЙ МОДУЛЬ</text>
        {[
          { x: 20, label: "SHA-256 / SHA-3", sub: "хеширование" },
          { x: 190, label: "RSA / ECDSA", sub: "подпись" },
          { x: 360, label: "X.509", sub: "сертификаты" },
          { x: 530, label: "PKI", sub: "инфраструктура" },
        ].map((item) => (
          <g key={item.x}>
            <rect x={item.x} y="260" width="140" height="50" rx="1" stroke="#ddd" strokeWidth="1" fill="white"/>
            <text x={item.x + 70} y="282" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Mono">{item.label}</text>
            <text x={item.x + 70} y="298" textAnchor="middle" fontSize="8" fill="#999" fontFamily="IBM Plex Sans">{item.sub}</text>
          </g>
        ))}
        <defs>
          <marker id="ar1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6Z" fill="#111"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
);

const SlideCrypto = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="06" title="Криптографические механизмы" />
    <div className="flex-1 grid grid-cols-2 gap-8 items-start">
      <div>
        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Хеширование</div>
        <div className="space-y-3">
          {[
            { name: "SHA-256", bits: "256 бит", use: "Контроль целостности", status: "Рекомендуется", ok: true },
            { name: "SHA-3 (Keccak)", bits: "256/512 бит", use: "Альтернатива SHA-2", status: "Рекомендуется", ok: true },
            { name: "MD5", bits: "128 бит", use: "Устаревший стандарт", status: "Не применять", ok: false },
          ].map((item) => (
            <div key={item.name} className="border border-gray-200 p-3 grid grid-cols-3 gap-2 items-center">
              <div>
                <div className="text-sm font-mono font-semibold text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-400 font-mono">{item.bits}</div>
              </div>
              <div className="text-sm text-gray-500">{item.use}</div>
              <div className={`text-sm font-mono text-right ${item.ok ? "text-green-600" : "text-red-500"}`}>{item.status}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Электронная подпись</div>
        <div className="space-y-3">
          {[
            { name: "RSA-2048", type: "Асимметричная", use: "Подпись и верификация", status: "Применяется" },
            { name: "ECDSA P-256", type: "Эллиптическая", use: "Компактная подпись", status: "Применяется" },
            { name: "ГОСТ Р 34.10", type: "Российский стандарт", use: "Госсектор РФ", status: "Опционально" },
          ].map((item) => (
            <div key={item.name} className="border border-gray-200 p-3 grid grid-cols-3 gap-2 items-center">
              <div>
                <div className="text-sm font-mono font-semibold text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-400">{item.type}</div>
              </div>
              <div className="text-sm text-gray-500">{item.use}</div>
              <div className="text-sm font-mono text-right text-blue-600">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SlideAlgorithms = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="07" title="Алгоритмы хеширования и подписи" />
    <div className="flex-1 flex gap-10 items-center">
      <div className="flex-1">
        <svg viewBox="0 0 340 280" className="w-full" fill="none">
          <text x="0" y="14" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">АЛГОРИТМ SHA-256</text>
          <rect x="0" y="24" width="100" height="36" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="50" y="46" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Sans">Входное M</text>
          <line x1="100" y1="42" x2="130" y2="42" stroke="#111" strokeWidth="1" markerEnd="url(#al1)"/>
          <rect x="130" y="24" width="90" height="36" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="175" y="40" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Mono">Паддинг</text>
          <text x="175" y="53" textAnchor="middle" fontSize="8" fill="#888" fontFamily="IBM Plex Mono">до 512 бит</text>
          <line x1="220" y1="42" x2="250" y2="42" stroke="#111" strokeWidth="1" markerEnd="url(#al1)"/>
          <rect x="250" y="24" width="80" height="36" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="290" y="46" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Mono">64 раунда</text>
          <line x1="290" y1="60" x2="290" y2="90" stroke="#111" strokeWidth="1" markerEnd="url(#al1)"/>
          <rect x="220" y="90" width="150" height="36" rx="2" stroke="#111" strokeWidth="2" fill="white"/>
          <text x="295" y="112" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Mono">Хеш 256 бит</text>
          <text x="10" y="170" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">АЛГОРИТМ RSA-2048</text>
          <rect x="0" y="180" width="80" height="30" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="40" y="199" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Sans">Хеш H(M)</text>
          <line x1="80" y1="195" x2="110" y2="195" stroke="#111" strokeWidth="1" markerEnd="url(#al1)"/>
          <rect x="110" y="180" width="90" height="30" rx="2" stroke="#333" strokeWidth="1.5" fill="#f5f5f5"/>
          <text x="155" y="195" textAnchor="middle" fontSize="8" fill="#333" fontFamily="IBM Plex Mono">Encrypt(H, d)</text>
          <text x="155" y="207" textAnchor="middle" fontSize="7" fill="#999" fontFamily="IBM Plex Mono">mod n</text>
          <line x1="200" y1="195" x2="228" y2="195" stroke="#111" strokeWidth="1" markerEnd="url(#al1)"/>
          <rect x="228" y="180" width="100" height="30" rx="2" stroke="#111" strokeWidth="2" fill="white"/>
          <text x="278" y="199" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Mono">Подпись S</text>
          <rect x="0" y="240" width="330" height="32" rx="2" stroke="#eee" fill="#fafafa"/>
          <text x="165" y="255" textAnchor="middle" fontSize="8" fill="#888" fontFamily="IBM Plex Mono">Ключевая пара: e,d — показатели; n = p×q</text>
          <text x="165" y="267" textAnchor="middle" fontSize="8" fill="#aaa" fontFamily="IBM Plex Mono">Стойкость: факторизация n при длине 2048 бит</text>
          <defs>
            <marker id="al1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6Z" fill="#111"/>
            </marker>
          </defs>
        </svg>
      </div>
      <div className="w-60 space-y-4 flex-shrink-0">
        <div className="bg-gray-950 text-white p-4">
          <div className="text-xs font-mono text-gray-400 mb-2">SHA-256 · ПРИМЕР</div>
          <div className="text-xs font-mono text-gray-300 break-all leading-relaxed">
            "Привет" →<br />
            <span className="text-green-400">a665a45920...</span><br />
            <span className="text-gray-500">...422f3d0cb4</span>
          </div>
        </div>
        <div className="border border-gray-200 p-4 space-y-2">
          <div className="text-xs font-mono text-gray-500 uppercase mb-2">Свойства</div>
          {["Детерминированность", "Лавинный эффект", "Необратимость", "Стойкость к коллизиям"].map((p) => (
            <div key={p} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0" />
              <span className="text-xs text-gray-600">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SlideUserFlow = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="08" title="Процесс работы пользователя" />
    <div className="flex-1 flex items-center justify-center">
      <svg viewBox="0 0 700 280" className="w-full max-w-4xl" fill="none">
        <text x="350" y="16" textAnchor="middle" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">ПОЛЬЗОВАТЕЛЬСКИЙ СЦЕНАРИЙ (ОТПРАВИТЕЛЬ)</text>
        {[
          { x: 10, label: "1. Регистрация", sub: "Генерация ключевой пары", icon: "👤" },
          { x: 150, label: "2. Ввод", sub: "Текст или файл данных", icon: "✏️" },
          { x: 290, label: "3. Хеширование", sub: "hash(M) → H", icon: "⚙️" },
          { x: 430, label: "4. Подпись", sub: "Sign(H, K_priv) → S", icon: "🔏" },
          { x: 570, label: "5. Отправка", sub: "Пакет M+S → канал", icon: "📤" },
        ].map((step, i) => (
          <g key={step.x}>
            <rect x={step.x} y="30" width="120" height="100" rx="2" stroke={i === 0 ? "#111" : i === 4 ? "#090" : "#aaa"} strokeWidth={i === 0 || i === 4 ? "1.5" : "1"} fill="white"/>
            <text x={step.x + 60} y="60" textAnchor="middle" fontSize="20">{step.icon}</text>
            <text x={step.x + 60} y="80" textAnchor="middle" fontSize="9" fill="#111" fontFamily="IBM Plex Sans" fontWeight="600">{step.label}</text>
            <text x={step.x + 60} y="95" textAnchor="middle" fontSize="8" fill="#888" fontFamily="IBM Plex Mono">{step.sub}</text>
            {i < 4 && <line x1={step.x + 120} y1="80" x2={step.x + 140} y2="80" stroke="#111" strokeWidth="1" markerEnd="url(#uf1)"/>}
          </g>
        ))}
        <rect x="10" y="170" width="680" height="80" rx="2" stroke="#eee" fill="#fafafa"/>
        <text x="350" y="190" textAnchor="middle" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="1">СИСТЕМА (АВТОМАТИЧЕСКИ)</text>
        {[
          { x: 30, t1: "Проверка", t2: "формата" },
          { x: 200, t1: "Хеш-функция", t2: "SHA-256" },
          { x: 370, t1: "Шифрование", t2: "RSA/ECDSA" },
          { x: 540, t1: "Формирование", t2: "пакета" },
        ].map((b) => (
          <g key={b.x}>
            <rect x={b.x} y="200" width="130" height="36" rx="1" stroke="#ddd" fill="white"/>
            <text x={b.x + 65} y="217" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Mono">{b.t1}</text>
            <text x={b.x + 65} y="229" textAnchor="middle" fontSize="9" fill="#888" fontFamily="IBM Plex Mono">{b.t2}</text>
          </g>
        ))}
        <defs>
          <marker id="uf1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6Z" fill="#111"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
);

const SlideVerification = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="09" title="Проверка сообщений на получателе" />
    <div className="flex-1 flex gap-10 items-center">
      <div className="w-96 flex-shrink-0">
        <svg viewBox="0 0 380 340" className="w-full" fill="none">
          <text x="0" y="16" fontSize="9" fill="#999" fontFamily="IBM Plex Mono" letterSpacing="2">ВЕРИФИКАЦИЯ ПОДПИСИ</text>
          <rect x="80" y="24" width="220" height="36" rx="2" stroke="#111" strokeWidth="1.5" fill="white"/>
          <text x="190" y="43" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Sans">Получен пакет</text>
          <text x="190" y="54" textAnchor="middle" fontSize="8" fill="#888" fontFamily="IBM Plex Mono">M + S + K_pub</text>
          <line x1="190" y1="60" x2="190" y2="90" stroke="#111" strokeWidth="1" markerEnd="url(#vr1)"/>
          <rect x="10" y="90" width="160" height="36" rx="2" stroke="#333" strokeWidth="1.5" fill="#f9f9f9"/>
          <text x="90" y="112" textAnchor="middle" fontSize="10" fill="#333" fontFamily="IBM Plex Mono">hash(M) → H'</text>
          <rect x="210" y="90" width="160" height="36" rx="2" stroke="#333" strokeWidth="1.5" fill="#f9f9f9"/>
          <text x="290" y="108" textAnchor="middle" fontSize="9" fill="#333" fontFamily="IBM Plex Mono">Decrypt(S, K_pub)</text>
          <text x="290" y="121" textAnchor="middle" fontSize="8" fill="#888" fontFamily="IBM Plex Mono">→ H_signed</text>
          <line x1="190" y1="90" x2="90" y2="90" stroke="#111" strokeWidth="1"/>
          <line x1="190" y1="90" x2="290" y2="90" stroke="#111" strokeWidth="1"/>
          <line x1="90" y1="126" x2="90" y2="170" stroke="#111" strokeWidth="1" markerEnd="url(#vr1)"/>
          <line x1="290" y1="126" x2="290" y2="170" stroke="#111" strokeWidth="1" markerEnd="url(#vr1)"/>
          <rect x="110" y="170" width="160" height="40" rx="2" stroke="#111" strokeWidth="2" fill="white"/>
          <text x="190" y="188" textAnchor="middle" fontSize="10" fill="#111" fontFamily="IBM Plex Mono">H' == H_signed ?</text>
          <text x="190" y="202" textAnchor="middle" fontSize="8" fill="#888" fontFamily="IBM Plex Sans">Сравнение хешей</text>
          <line x1="90" y1="170" x2="110" y2="190" stroke="#111" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="290" y1="170" x2="270" y2="190" stroke="#111" strokeWidth="1" strokeDasharray="2 2"/>
          <line x1="160" y1="210" x2="100" y2="260" stroke="#090" strokeWidth="1" markerEnd="url(#vrg)"/>
          <line x1="220" y1="210" x2="280" y2="260" stroke="#c00" strokeWidth="1" markerEnd="url(#vrr)"/>
          <rect x="20" y="260" width="160" height="50" rx="2" stroke="#090" strokeWidth="1.5" fill="#f0fff4"/>
          <text x="100" y="281" textAnchor="middle" fontSize="10" fill="#090" fontFamily="IBM Plex Sans" fontWeight="600">✓ Подтверждено</text>
          <text x="100" y="297" textAnchor="middle" fontSize="8" fill="#090" fontFamily="IBM Plex Sans">Сообщение подлинно</text>
          <rect x="200" y="260" width="160" height="50" rx="2" stroke="#c00" strokeWidth="1.5" fill="#fff5f5"/>
          <text x="280" y="281" textAnchor="middle" fontSize="10" fill="#c00" fontFamily="IBM Plex Sans" fontWeight="600">✗ Отклонено</text>
          <text x="280" y="297" textAnchor="middle" fontSize="8" fill="#c00" fontFamily="IBM Plex Sans">Изменено или подмена</text>
          <defs>
            <marker id="vr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6Z" fill="#111"/>
            </marker>
            <marker id="vrg" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6Z" fill="#090"/>
            </marker>
            <marker id="vrr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6Z" fill="#c00"/>
            </marker>
          </defs>
        </svg>
      </div>
      <div className="flex-1 space-y-5">
        <p className="text-xl font-light text-gray-700 leading-relaxed">
          Получатель выполняет два независимых действия и сравнивает результаты.
        </p>
        {[
          { step: "01", title: "Вычисление хеша", desc: "hash(M) → H' на стороне получателя. Независимо от отправителя." },
          { step: "02", title: "Расшифровка подписи", desc: "Decrypt(S, K_pub) → H_signed. Используется открытый ключ из сертификата." },
          { step: "03", title: "Сравнение", desc: "Если H' == H_signed — сообщение целостно и подлинно. Иначе — отказ." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="text-3xl font-mono text-gray-100 font-bold flex-shrink-0 w-10">{item.step}</div>
            <div>
              <div className="text-base font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideApplication = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="10" title="Практическое применение" />
    <div className="flex-1 grid grid-cols-3 gap-4 items-start">
      {[
        {
          title: "Корпоративная среда",
          icon: "Building2",
          items: [
            "Защита внутренней переписки",
            "Верификация финансовых документов",
            "Контроль цепочки согласований",
            "Защита от инсайдерских угроз",
          ],
        },
        {
          title: "Образовательная среда",
          icon: "GraduationCap",
          items: [
            "Подпись учебных материалов",
            "Верификация источника задания",
            "Контроль целостности результатов",
            "Защита дипломных работ",
          ],
        },
        {
          title: "Государственный сектор",
          icon: "Landmark",
          items: [
            "Юридически значимые документы",
            "Межведомственный обмен",
            "Архивное хранение данных",
            "Соответствие ГОСТ Р 34.10",
          ],
        },
      ].map((card) => (
        <div key={card.title} className="border border-gray-200 h-full flex flex-col">
          <div className="border-b border-gray-200 p-4 flex items-center gap-3">
            <Icon name={card.icon} size={18} className="text-gray-500" />
            <span className="text-base font-semibold text-gray-900">{card.title}</span>
          </div>
          <div className="p-4 space-y-2 flex-1">
            {card.items.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-base text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SlideRisks = () => (
  <div className="h-full flex flex-col p-16">
    <SlideHeader num="11" title="Снижение рисков" />
    <div className="flex-1 flex gap-6 items-start">
      <div className="flex-1">
        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-400" />
          До внедрения
        </div>
        <div className="space-y-1.5">
          {[
            { risk: "MITM-атака", prob: "Высокая" },
            { risk: "Подмена отправителя", prob: "Высокая" },
            { risk: "Изменение данных", prob: "Средняя" },
            { risk: "Отрицание авторства", prob: "Высокая" },
            { risk: "Утечка данных", prob: "Средняя" },
          ].map((r) => (
            <div key={r.risk} className="flex justify-between items-center border border-red-100 bg-red-50 px-3 py-2">
              <span className="text-sm text-gray-700">{r.risk}</span>
              <span className="text-sm text-red-600 font-mono">{r.prob}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-8 gap-2">
        <Icon name="ArrowRight" size={24} className="text-gray-400" />
        <span className="text-xs font-mono text-gray-300 writing-mode-vertical">внедрение</span>
      </div>
      <div className="flex-1">
        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400" />
          После внедрения
        </div>
        <div className="space-y-1.5">
          {[
            { risk: "MITM-атака", prob: "Низкая" },
            { risk: "Подмена отправителя", prob: "Низкая" },
            { risk: "Изменение данных", prob: "Низкая" },
            { risk: "Отрицание авторства", prob: "Низкая" },
            { risk: "Утечка данных", prob: "Средняя" },
          ].map((r) => (
            <div key={r.risk} className="flex justify-between items-center border border-green-100 bg-green-50 px-3 py-2">
              <span className="text-sm text-gray-700">{r.risk}</span>
              <span className="text-sm text-green-700 font-mono">{r.prob}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-48 flex-shrink-0">
        <div className="bg-gray-950 text-white p-4 h-full flex flex-col justify-center">
          <div className="text-xs font-mono text-gray-400 mb-3">ЭФФЕКТ</div>
          <div className="space-y-3">
            {[
              { label: "Целостность", val: "100%" },
              { label: "Подлинность", val: "100%" },
              { label: "Отрицание", val: "≈0%" },
            ].map((e) => (
              <div key={e.label}>
                <div className="text-xs text-gray-400">{e.label}</div>
                <div className="text-xl font-mono text-white">{e.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideConclusion = () => (
  <div className="h-full flex flex-col p-16 relative">
    <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gray-950" />
    <SlideHeader num="12" title="Заключение и результаты" />
    <div className="flex-1 flex gap-12 items-start relative z-10">
      <div className="flex-1 space-y-4">
        <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Достигнутые результаты</div>
        {[
          { n: "01", text: "Разработана система защищённой коммуникации с полным циклом подписи и верификации" },
          { n: "02", text: "Реализован контроль целостности на основе SHA-256 с автоматической проверкой при получении" },
          { n: "03", text: "Обеспечена аутентификация отправителя без предварительного обмена секретами" },
          { n: "04", text: "Подтверждена целесообразность применения в корпоративных и образовательных средах" },
        ].map((item) => (
          <div key={item.n} className="flex gap-4 border-l-2 border-gray-200 pl-4">
            <div className="text-xl font-mono text-gray-200 font-bold flex-shrink-0">{item.n}</div>
            <div className="text-base text-gray-700 leading-relaxed">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="w-60 flex-shrink-0 space-y-3">
        <div className="bg-gray-950 text-white p-5">
          <div className="text-xs font-mono text-gray-400 mb-3">ИТОГ</div>
          <div className="text-sm font-light text-white leading-relaxed">
            Система обеспечивает однозначный результат — подтверждение или отказ — без возможности обхода при стойких алгоритмах.
          </div>
        </div>
        <div className="border border-gray-200 p-4 text-xs font-mono text-gray-500 leading-relaxed">
          <div className="text-gray-400 mb-2">СТАНДАРТЫ</div>
          SHA-256: NIST FIPS 180-4<br />
          RSA: RFC 8017<br />
          ECDSA: FIPS 186-5<br />
          ГОСТ Р 34.10-2012
        </div>
      </div>
    </div>
    <div className="relative z-10 mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
      <div className="text-xs text-gray-400 font-mono">Поваров М.К. · ПГУТИ · 2026</div>
      <div className="text-xs text-gray-400">Науч. рук.: Евстафьева В.А.</div>
    </div>
  </div>
);

const slideComponents: Record<string, React.FC> = {
  title: SlideTitle,
  problem: SlideProblem,
  integrity: SlideIntegrity,
  signature: SlideSignature,
  architecture: SlideArchitecture,
  crypto: SlideCrypto,
  algorithms: SlideAlgorithms,
  userflow: SlideUserFlow,
  verification: SlideVerification,
  application: SlideApplication,
  risks: SlideRisks,
  conclusion: SlideConclusion,
};

const slideTitles = [
  "Титульный слайд",
  "Проблема",
  "Контроль целостности",
  "Электронная подпись",
  "Архитектура системы",
  "Криптографические механизмы",
  "Алгоритмы",
  "Процесс пользователя",
  "Проверка сообщений",
  "Практическое применение",
  "Снижение рисков",
  "Заключение",
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    setCurrent((cur) => {
      if (idx === cur) return cur;
      return cur;
    });
    setAnimating((anim) => {
      if (anim) return anim;
      return true;
    });
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 150);
  }, []);

  const prev = useCallback(() => {
    setCurrent((cur) => {
      const next = Math.max(0, cur - 1);
      if (next !== cur) {
        setAnimating(true);
        setTimeout(() => { setCurrent(next); setAnimating(false); }, 150);
      }
      return cur;
    });
  }, []);

  const next = useCallback(() => {
    setCurrent((cur) => {
      const nxt = Math.min(slides.length - 1, cur + 1);
      if (nxt !== cur) {
        setAnimating(true);
        setTimeout(() => { setCurrent(nxt); setAnimating(false); }, 150);
      }
      return cur;
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComp = slideComponents[slides[current].type];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-ibm p-4">
      <div className="w-full max-w-5xl">
        <div
          className="bg-white shadow-xl overflow-hidden"
          style={{
            aspectRatio: "16/9",
            transition: "opacity 0.15s ease",
            opacity: animating ? 0 : 1,
          }}
        >
          <div className="h-full">
            <SlideComp />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-mono text-gray-600 hover:border-gray-600 hover:text-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white"
          >
            <Icon name="ChevronLeft" size={14} />
            Назад
          </button>

          <div className="flex gap-1.5 flex-wrap justify-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                title={slideTitles[i]}
                className={`h-1.5 transition-all ${i === current ? "bg-gray-950 w-8" : "bg-gray-300 hover:bg-gray-500 w-5"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-mono text-gray-600 hover:border-gray-600 hover:text-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white"
          >
            Далее
            <Icon name="ChevronRight" size={14} />
          </button>
        </div>

        <div className="mt-2 text-center text-xs font-mono text-gray-400">
          {slideTitles[current]} · {current + 1} из {slides.length} · ← → для навигации
        </div>
      </div>
    </div>
  );
}