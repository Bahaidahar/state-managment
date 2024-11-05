/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Image from "next/image";

const slides = [
  {
    title: "Сцена 0: Stateless и Stateful Виджеты – Основы Flutter Виджетов",
    content: (
      <>
        <p>
          В Flutter все элементы экрана – это виджеты. Они делятся на два типа:
          StatelessWidget и StatefulWidget.
        </p>
        <h3 className="mb-2 mt-4 text-lg font-semibold">🧱 StatelessWidget</h3>
        <ul className="list-inside list-disc">
          <li>StatelessWidget – это неизменяемый виджет.</li>
          <li>Он не имеет состояния и отображает статичное содержимое.</li>
          <li>
            Подходит для элементов, которые не изменяются после инициализации,
            например, заголовки, иконки, кнопки без анимаций.
          </li>
        </ul>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'package:flutter/material.dart';

class MyStatelessWidget extends StatelessWidget {
  final String title;

  MyStatelessWidget({required this.title});

  @override
  Widget build(BuildContext context) {
    return Text(title, style: TextStyle(fontSize: 24));
  }
}`}
          </code>
        </pre>
        <p className="mt-2">
          📌 При каждом вызове build создается новый объект Text. Виджет не
          перерисовывается, если его свойства остаются прежними.
        </p>

        <h3 className="mb-2 mt-4 text-lg font-semibold">🔄 StatefulWidget</h3>
        <ul className="list-inside list-disc">
          <li>StatefulWidget – это динамический виджет.</li>
          <li>
            Имеет состояние, которое может меняться в процессе использования.
          </li>
          <li>
            Используется для элементов, которые могут изменяться, например,
            счетчики, поля ввода текста, переключатели.
          </li>
        </ul>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'package:flutter/material.dart';

class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int counter = 0;

  void _incrementCounter() {
    setState(() {
      counter++; // 🔄 Обновляем состояние!
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text("Счет: $counter", style: TextStyle(fontSize: 24)),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text("Увеличить счетчик"),
        ),
      ],
    );
  }
}`}
          </code>
        </pre>
        <p className="mt-2">
          ⚙️ setState уведомляет Flutter, что состояние изменилось, и виджет
          должен перерисоваться.
        </p>
      </>
    ),
  },
  {
    title: "Сцена 1: Основы Рендера во Flutter",
    content: (
      <div className="flex flex-col items-center gap-2">
        <p>
          Flutter использует виджетное дерево для отображения элементов на
          экране. Каждый виджет обновляется или "перестраивается" при изменении
          его состояния.
        </p>
        <ul className="mt-4 list-inside list-disc">
          <li>
            Когда состояние изменяется, Flutter перестраивает виджеты, которые
            зависят от этого состояния.
          </li>
          <li>
            Ререндеринг происходит только для непостоянных виджетов (например,
            StatefulWidget), где состояние может изменяться.
          </li>
        </ul>
        <Image src="/flutter-widgets.png" alt="hz" width={400} height={400} />
      </div>
    ),
  },
  {
    title: "Сцена 2: setState – Простой и Быстрый Ререндеринг",
    content: (
      <>
        <p>
          setState — это самый простой способ обновления состояния в Flutter. Он
          перерисовывает только тот виджет, в котором был вызван.
        </p>
        <h3 className="mb-2 mt-4 text-lg font-semibold">
          🎉 Пример кода с setState
        </h3>
        <pre className="overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'package:flutter/material.dart';

class CounterPage extends StatefulWidget {
  @override
  _CounterPageState createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int count = 0;

  void _incrementCounter() {
    setState(() {
      count++; // 🔄 Ререндерим, обновляя состояние!
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Счетчик")),
      body: Center(
        child: Text("Счет: $count", style: TextStyle(fontSize: 24)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        child: Icon(Icons.add),
      ),
    );
  }
}`}
          </code>
        </pre>
        <p className="mt-4">
          📈 Когда мы нажимаем кнопку, setState перезапускает build и обновляет
          count на экране.
        </p>
      </>
    ),
  },
  {
    title: "Сцена 3: Provider – Легкая Управляемая Система Состояний",
    content: (
      <>
        <p>
          Provider позволяет управлять состоянием на более сложных уровнях
          приложения, поддерживая обновления в нескольких виджетах.
        </p>
        <h3 className="mb-2 mt-4 text-lg font-semibold">
          🎉 Пример кода с Provider
        </h3>
        <p>Установим provider в pubspec.yaml:</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-yaml">
            {`dependencies:
  provider: ^6.0.0`}
          </code>
        </pre>
        <p className="mt-4">Определим модель состояния:</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'package:flutter/foundation.dart';

class Counter with ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners(); // 🔄 Уведомляем об изменении
  }
}`}
          </code>
        </pre>
        <p className="mt-4">Используем Provider в приложении:</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => Counter(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CounterPage(),
    );
  }
}

class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Счетчик с Provider")),
      body: Center(
        child: Consumer<Counter>(
          builder: (context, counter, _) => Text(
            "Счет: {counter.count}",
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.read<Counter>().increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}`}
          </code>
        </pre>
        <p className="mt-4">
          ⚡️ Provider позволяет нам легко обновлять состояние и разделять его
          между виджетами без передачи через каждый уровень!
        </p>
      </>
    ),
  },
  {
    title: "Сцена 4: Bloc – Сложное Управление Состоянием с Потоками",
    content: (
      <>
        <p>
          Bloc — это более продвинутый подход, подходящий для управления
          состоянием сложных приложений. Он использует потоки для работы с
          состоянием.
        </p>
        <h3 className="mb-2 mt-4 text-lg font-semibold">
          🎉 Пример кода с Bloc
        </h3>
        <p>Установим flutter_bloc в pubspec.yaml:</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-yaml">
            {`dependencies:
  flutter_bloc: ^8.0.0`}
          </code>
        </pre>
        <p className="mt-4">Создадим CounterCubit:</p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'package:flutter_bloc/flutter_bloc.dart';

class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1); // 🔄 Отправляем новое состояние
}`}
          </code>
        </pre>
        <p className="mt-4">
          Используем BlocProvider и BlocBuilder для управления и обновления
          состояния:
        </p>
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: BlocProvider(
        create: (_) => CounterCubit(),
        child: CounterPage(),
      ),
    );
  }
}

class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Счетчик с Bloc")),
      body: Center(
        child: BlocBuilder<CounterCubit, int>(
          builder: (context, count) => Text(
            "Счет: $count",
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.read<CounterCubit>().increment(),
        child: Icon(Icons.add),
      ),
    );
  }
}`}
          </code>
        </pre>
        <p className="mt-4">
          🧠 В Bloc каждый раз, когда increment вызывается, новое состояние
          "выбрасывается" (emit), и BlocBuilder обновляет интерфейс.
        </p>
      </>
    ),
  },
  {
    title: "Эпилог: Какой Подход Выбрать?",
    content: (
      <div className="space-y-4">
        <p>
          Теперь у тебя есть три мощных инструмента для управления состоянием в
          Flutter!
        </p>
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Подход</th>
              <th className="border-b px-4 py-2">Использовать для</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">setState</td>
              <td className="border-b px-4 py-2">
                Простые, локальные состояния
              </td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Provider</td>
              <td className="border-b px-4 py-2">
                Приложения среднего уровня, глобальное состояние
              </td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Bloc</td>
              <td className="border-b px-4 py-2">
                Сложные приложения, потоковое управление
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "ДЗ: Время деньги",
    content: (
      <div className="space-y-4">
        <p>Сделайте Тайемр использую setState, Provider, BLoC</p>
        Пример на setState
        <pre className="mt-2 overflow-x-auto rounded-md bg-gray-100 p-4">
          <code className="language-dart">
            {`import 'dart:async';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TimerScreen(),
    );
  }
}

class TimerScreen extends StatefulWidget {
  @override
  _TimerScreenState createState() => _TimerScreenState();
}

class _TimerScreenState extends State<TimerScreen> {
  Timer? _timer;
  int _start = 10; // Начальное значение таймера в секундах

  // Метод для старта таймера
  void startTimer() {
    _timer = Timer.periodic(Duration(seconds: 1), (timer) {
      if (_start > 0) {
        setState(() {
          _start--;
        });
      } else {
        _timer?.cancel();
      }
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Таймер')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Осталось времени: $_start секунд',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: startTimer,
              child: Text('Запустить таймер'),
            ),
          ],
        ),
      ),
    );
  }
}
`}
          </code>
        </pre>
      </div>
    ),
  },
];

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="animate-gradient-x flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <style jsx global>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .slide-enter {
          opacity: 0;
          transform: translateX(${direction > 0 ? "100%" : "-100%"});
        }
        .slide-enter-active {
          opacity: 1;
          transform: translateX(0%);
          transition:
            opacity 500ms,
            transform 500ms;
        }
        .slide-exit {
          opacity: 1;
          transform: translateX(0%);
        }
        .slide-exit-active {
          opacity: 0;
          transform: translateX(${direction > 0 ? "-100%" : "100%"});
          transition:
            opacity 500ms,
            transform 500ms;
        }
      `}</style>
      <Card className="flex h-[800px] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white/90 shadow-xl backdrop-blur-md">
        <div className="relative flex-1 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute left-0 top-0 h-full w-full p-6 transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? "slide-enter-active"
                  : "slide-exit-active"
              }`}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <h2 className="mb-6 text-3xl font-bold text-purple-700">
                🎬 {slide.title}
              </h2>
              <div className="h-[calc(100%-4rem)] overflow-y-auto pb-4 text-gray-800">
                {slide.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between bg-purple-100 p-4">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="flex items-center transition-colors duration-300 hover:bg-purple-200"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Предыдущий
          </Button>
          <span className="text-sm font-semibold text-purple-700">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button
            onClick={nextSlide}
            variant="outline"
            className="flex items-center transition-colors duration-300 hover:bg-purple-200"
          >
            Следующий <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
