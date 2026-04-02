export interface ModuleSection {
  heading: string;
  content?: string;
  highlights?: string[];
  table?: { headers: string[]; rows: string[][] };
  code?: string;
  codeLanguage?: string;
  list?: string[];
  subSections?: { heading: string; list?: string[]; content?: string }[];
}

export interface ModuleData {
  id: number;
  title: string;
  icon: string;
  desc: string;
  contents?: string[];
  sections?: ModuleSection[];
}

export const MODULES: ModuleData[] = [
  {
    id: 1,
    title: 'Introduction to Flutter',
    icon: '🚀',
    desc: 'Giới thiệu Flutter, cài đặt môi trường và chạy app đầu tiên.',
    contents: [
      'Overview of Flutter',
      'What is Flutter and Why Flutter?',
      'Flutter Architecture',
      'Dart Language Basics',
      'Introduction to Dart and its Role in Flutter',
      'Development Environments (DartPad, VS Code, Android Studio)',
      'Setting Up Flutter',
      'Installing SDK & Android Studio',
      'Configuring Emulator',
      'Creating & Running Your First App',
    ],
    sections: [
      {
        heading: 'What is Flutter?',
        content: 'Flutter is a UI toolkit developed by Google for building natively compiled applications from a single codebase.',
        list: [
          'Supported Platforms: Android, iOS, Web, macOS, Linux, and Windows.',
          'Flutter is written in Dart and uses its own high-performance rendering engine called Skia.',
          'It enables rapid UI development using reusable widgets.',
        ],
      },
      {
        heading: 'Why Flutter?',
        table: {
          headers: ['Feature', 'Description'],
          rows: [
            ['Fast Development', 'Hot Reload and Hot Restart'],
            ['Beautiful UI', 'Ready-to-use Material and Cupertino widgets'],
            ['Single Codebase', 'Write once, deploy everywhere'],
            ['Performance', 'Near-native speed'],
          ],
        },
      },
      {
        heading: 'Choosing Flutter Wisely',
        content: 'Flutter is powerful, but no technology fits every project. Choosing the right tool depends on the project context.',
        highlights: [
          'Key Message: Understanding when to use Flutter is just as important as knowing why it is powerful.',
        ],
      },
      {
        heading: 'When Is Flutter a Good Choice?',
        content: 'Flutter is an excellent choice for:',
        list: [
          'Cross-platform applications with shared UI and business logic',
          'MVPs (Minimum Viable Products), startups, and rapid prototyping',
          'Business applications (e-commerce, booking systems, dashboards)',
          'Apps with moderate use of device-specific features',
          'Teams with limited native Android/iOS development resources',
        ],
        highlights: [
          'Flutter shines when the main goals are fast time-to-market, reduced development costs, and maintaining a single codebase.',
          'Most enterprise applications do not need 100% native performance — this is where Flutter becomes a great solution.',
        ],
      },
      {
        heading: 'Flutter with Native Integration',
        list: [
          'Flutter handles UI and business logic.',
          'Native code handles platform-specific features.',
          'Communication between Flutter and native code is done through Platform Channels.',
        ],
        subSections: [
          {
            heading: 'Common Examples',
            list: ['Camera, Bluetooth, NFC', 'Payment SDKs', 'OS-level services'],
          },
        ],
        highlights: [
          'Flutter does not eliminate native code. Instead, it integrates smoothly with it. When a feature is not directly supported by Flutter, you can write native Android code (Kotlin/Java) or iOS code (Swift) and connect them via Platform Channels.',
          'This is a very common pattern in real-world Flutter projects.',
        ],
      },
      {
        heading: 'When Native Development Is Preferable',
        content: 'Use native development (Kotlin/Swift) when the project requires:',
        list: [
          'Deep OS customization',
          'High-performance games or real-time graphics',
          'Very low-level hardware access',
          'Strict platform-specific UI/UX requirements',
        ],
        highlights: [
          'Key Takeaway: Flutter is powerful, but it is not always the best choice. Choose the right tool for the right problem.',
        ],
      },
      {
        heading: 'A Brief History of Flutter',
        list: [
          '2015: Started as the "Sky" project',
          '2017: Flutter Alpha released',
          '2018: Flutter 1.0 released',
          '2021: Flutter 2.0 added stable Web and Desktop support',
          '2023–2025: Flutter 3.x series became stable and mature',
        ],
      },
      {
        heading: 'Flutter Architecture Overview',
        content: 'Flutter has three main layers:',
        list: [
          'Framework Layer (Dart)',
          'Engine Layer (C++)',
          'Embedder Layer',
        ],
        highlights: [
          'Rendering Workflow: Widget Tree → Render Tree → Composited Scene → GPU Rendering',
        ],
      },
      {
        heading: 'Framework Layer',
        content: 'Built with Dart.',
        list: [
          'Contains Widgets (StatelessWidget and StatefulWidget)',
          'Includes rendering and layout systems',
          'Foundation libraries',
        ],
        highlights: [
          'Key Concept: Everything in Flutter is a Widget',
        ],
      },
      {
        heading: 'Engine Layer & Embedder Layer',
        subSections: [
          {
            heading: 'Engine Layer',
            list: [
              'Written in C++',
              'Powered by the Skia graphics engine',
              'Handles rendering, accessibility, text layout, and GPU acceleration',
              'Ensures visual consistency across all platforms',
            ],
          },
          {
            heading: 'Embedder Layer',
            list: [
              'Manages input, lifecycle, and window management',
              'Supports custom embedders (e.g., for Raspberry Pi)',
            ],
          },
        ],
      },
      {
        heading: 'Benefits of Flutter',
        list: [
          'Excellent performance (compiles to native ARM code)',
          'Consistent UI across all platforms',
          'Highly flexible with a rich set of widgets',
        ],
      },
      {
        heading: 'Flutter vs Other Frameworks',
        table: {
          headers: ['Framework', 'Language', 'Output'],
          rows: [
            ['Flutter', 'Dart', 'Native UI + Skia Engine'],
            ['React Native', 'JavaScript', 'Bridge to Native Components'],
            ['Native (Android/iOS)', 'Kotlin / Swift', 'Pure Native'],
          ],
        },
      },
      {
        heading: "Dart: Flutter's Programming Language",
        content: 'Dart is the language used to write Flutter apps. It was designed specifically for building user interfaces.',
        code: `void main() {\n  print('Welcome to Flutter!');\n}`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'Key Features',
            list: [
              'Combines AOT (Ahead-of-Time) and JIT (Just-in-Time) compilation',
              'Supports null safety and strong typing',
            ],
          },
          {
            heading: 'Dart Core Features',
            list: [
              'Object-Oriented Programming',
              'Functions as first-class objects',
              'Null safety',
              'Async/Await support',
            ],
          },
        ],
      },
      {
        heading: 'Flutter Development Environments',
        content: 'You can develop Flutter apps using three main environments:',
        list: [
          'DartPad (Online, no installation)',
          'VS Code (Lightweight and fast)',
          'Android Studio (Full-featured IDE)',
        ],
        highlights: [
          'All environments compile to the same Flutter runtime.',
        ],
      },
      {
        heading: 'Using DartPad (Online Environment)',
        list: [
          'URL: https://dartpad.dev',
          'No installation required',
          'Run Flutter code instantly in the browser',
          'Supports core widgets (Scaffold, Text, Column, etc.)',
          'Perfect for live demos and quick exercises',
        ],
      },
      {
        heading: 'Installing the Flutter SDK',
        list: [
          'Download the Flutter SDK from https://flutter.dev',
          'Extract the folder (e.g., C:\\src\\flutter or ~/flutter)',
          'Add Flutter to your system PATH',
          'Verify installation by running: flutter doctor',
        ],
        code: `flutter doctor`,
        codeLanguage: 'bash',
        highlights: [
          'macOS users need Xcode for iOS builds',
          'Windows users should enable virtualization for the emulator',
        ],
      },
      {
        heading: 'Installing Android Studio',
        list: [
          'Download and install Android Studio',
          'Install the Flutter plugin (Preferences → Plugins → Flutter)',
          'The Dart plugin will be installed automatically',
          'Make sure Android SDK and command-line tools are installed',
        ],
      },
      {
        heading: 'Creating a New Flutter Project',
        list: [
          'Go to File → New → New Flutter Project',
          'Select your Flutter SDK path',
          'Enter project name: movies',
          'Organization ID: com.fptu.movies',
          'Select target platforms: Android, iOS, Web, macOS, Windows',
        ],
      },
      {
        heading: 'Flutter Project Structure',
        table: {
          headers: ['Folder / File', 'Description'],
          rows: [
            ['lib/', 'Main Dart source code (entry point: main.dart)'],
            ['android/', 'Android-specific code'],
            ['ios/', 'iOS-specific code'],
            ['web/', 'Web-specific files'],
            ['pubspec.yaml', 'Dependencies and assets configuration'],
            ['test/', 'Unit and widget test files'],
          ],
        },
      },
      {
        heading: 'Launching an Emulator',
        list: [
          'Open Device Manager in Android Studio',
          'Create a new device (recommended: Pixel 8 or Pixel 3a)',
          'Choose API level 33+ (Android 13) or API 30 for low-spec PCs',
          'Set internal storage to at least 4GB',
        ],
      },
      {
        heading: 'Using VS Code (Recommended Lightweight IDE)',
        subSections: [
          {
            heading: 'Setup Steps',
            list: [
              'Install VS Code',
              'Install Flutter and Dart extensions',
              'Open project folder',
              'Press Ctrl + Shift + P → type "Flutter: New Project"',
              'Run the app with F5 or command flutter run',
            ],
          },
          {
            heading: 'Advantages of VS Code',
            list: [
              'Fast startup and low memory usage',
              'Excellent extension management',
              'Integrated terminal',
            ],
          },
        ],
      },
      {
        heading: 'Your First Flutter App ("Hello World")',
        code: `import 'package:flutter/material.dart';\n\nvoid main() => runApp(const MaterialApp(\n  home: Scaffold(\n    body: Center(\n      child: Text(\n        'Hello, World!',\n        style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),\n      ),\n    ),\n  ),\n));`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'How to Run',
          },
        ],
        table: {
          headers: ['Environment', 'Steps'],
          rows: [
            ['DartPad', 'Go to dartpad.dev → New → Flutter → Paste code → Click Run'],
            ['VS Code', 'Create new project → Replace lib/main.dart → Press F5 or flutter run'],
            ['Android Studio', 'Create new Flutter project → Paste code → Run on emulator'],
          ],
        },
      },
      {
        heading: 'Summary',
        content: 'By the end of this module, you should be able to:',
        list: [
          'Understand what Flutter is and its evolution',
          "Describe Flutter's three-layer architecture (Framework → Engine → Embedder)",
          'Recognize the benefits of Flutter compared to other frameworks',
          'Understand the basics of Dart and its role in Flutter',
          'Set up development environments: DartPad, VS Code, and Android Studio',
          'Install Flutter SDK and verify it using flutter doctor',
          'Create and run your first "Hello World" Flutter app',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Dart Essentials',
    icon: '🎯',
    desc: 'Cú pháp cơ bản Dart: biến, hàm, điều kiện, vòng lặp.',
    contents: [
      'Program Structure',
      'Data Types',
      'Variables',
      'Collections',
      'Control Flow',
      'Object-Oriented Programming (OOP)',
      'Null Safety',
      'Asynchronous Programming',
    ],
    sections: [
      {
        heading: 'What is Dart?',
        content: 'Dart is a client-optimized, class-based programming language developed by Google.',
        subSections: [
          {
            heading: 'Key Features',
            list: [
              'Designed specifically for building user interfaces (especially for Flutter)',
              'Supports multiple platforms: mobile (iOS & Android), web, and desktop',
              'Fast development with JIT (Just-In-Time) compilation',
              'High performance in production with AOT (Ahead-Of-Time) compilation',
              'Modern asynchronous programming model using Futures, async/await, and Streams',
            ],
          },
        ],
        highlights: [
          'Note: You can compare Dart with JavaScript and Kotlin to better understand its strengths.',
        ],
      },
      {
        heading: 'Program Structure',
        content: 'Every Dart program starts execution from the main() function. The print() function is used to output text to the console.',
        code: `void main() {\n  print("Hello Dart");\n}`,
        codeLanguage: 'dart',
        highlights: [
          'Important: Always remember to end statements with a semicolon (;) and ensure the program has a main() entry point.',
          'Use DartPad to quickly test and run Dart/Flutter code.',
        ],
      },
      {
        heading: 'Data Types',
        table: {
          headers: ['Type', 'Description'],
          rows: [
            ['int', 'Whole numbers'],
            ['double', 'Decimal numbers'],
            ['String', 'Text (enclosed in single \' or double " quotes)'],
            ['bool', 'Boolean values: true or false'],
            ['List', 'Ordered collection of elements'],
            ['Set', 'Unordered collection of unique elements'],
            ['Map', 'Collection of key-value pairs'],
            ['null', 'Represents the absence of a value'],
            ['Object', 'Base class for all Dart objects'],
            ['enum', 'Fixed set of constant values'],
            ['Iterable', 'Abstract type for collections used in loops'],
            ['Never', 'Used for functions that never return (always throw)'],
            ['dynamic', 'Can hold any type, type checking at runtime'],
            ['void', 'Indicates a function returns no value'],
          ],
        },
        highlights: [
          'Core Data Types: int, double, String, bool, List, Set, Map',
          'Dart supports strong typing with generics.',
        ],
        code: `int age = 20;\ndouble gpa = 3.75;\nString campus = "FPT HCM";\nbool isPassed = true;\nList<int> numbers = [1, 2, 3];`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Variables',
        content: 'Dart provides several ways to declare variables:',
        list: [
          'var → Type is inferred by the compiler',
          'dynamic → Type is determined at runtime',
          'final → Value can be assigned only once (runtime constant)',
          'const → Compile-time constant',
        ],
        code: `var name = "FPT University";        // Type inferred as String\nfinal year = 2024;                  // Can be assigned only once\nconst pi = 3.14159;                 // Compile-time constant\ndynamic x = 10;\nx = "Hello";                        // Allowed with dynamic`,
        codeLanguage: 'dart',
        highlights: [
          'Best Practice: Use final instead of var whenever possible.',
        ],
      },
      {
        heading: 'Strings & String Interpolation',
        content: 'You can embed variables and expressions inside strings using $ or ${}.',
        code: `String name = "FPT University";\nprint("Hello \$name");\nprint("Length: \${name.length}");`,
        codeLanguage: 'dart',
        highlights: [
          'Output: Hello FPT University / Length: 16',
          'Useful String methods: .length, .toUpperCase(), .toLowerCase(), .isEmpty, etc.',
        ],
      },
      {
        heading: 'Collections (List, Set, Map)',
        subSections: [
          { heading: 'List', content: 'Ordered collection (allows duplicates)' },
          { heading: 'Set', content: 'Unordered collection of unique elements' },
          { heading: 'Map', content: 'Key-value pairs' },
        ],
        code: `List<int> nums = [1, 2, 3];\n\nSet<int> uniqueNumbers = {1, 2, 2, 3};     // Result: {1, 2, 3}\n\nvar user = {\n  "id": 1,\n  "name": "Nam"\n};\n\nprint(user["name"]);   // Output: Nam`,
        codeLanguage: 'dart',
        highlights: [
          'Note: Accessing a non-existent key in a Map returns null.',
        ],
      },
      {
        heading: 'Control Flow',
        subSections: [
          {
            heading: '1. if / else',
          },
        ],
        code: `// if / else\nint score = 80;\nif (score >= 50) {\n  print("Pass");\n} else {\n  print("Fail");\n}\n\n// switch\nvar day = "Mon";\nswitch (day) {\n  case "Mon":\n    print("Start of the week");\n    break;\n  default:\n    print("Other day");\n}\n\n// Traditional for loop\nfor (int i = 0; i < 3; i++) {\n  print(i);\n}\n\n// for-in loop\nfor (var x in [1, 2, 3]) {\n  print(x);\n}\n\n// forEach (functional style)\n[1, 2, 3].forEach((e) => print(e));`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Functions',
        subSections: [
          { heading: 'Basic Functions & Arrow Syntax' },
          { heading: 'Optional Named Parameters' },
        ],
        code: `// Basic function\nint add(int a, int b) {\n  return a + b;\n}\n\n// Arrow syntax (single expression)\nint addArrow(int a, int b) => a + b;\n\nprint(add(2, 3));   // Output: 5\n\n// Named parameters with default value\nvoid greet({String name = "Guest"}) {\n  print("Hello, \$name");\n}\n\ngreet();                    // Hello, Guest\ngreet(name: "Minh");        // Hello, Minh`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Introduction to Object-Oriented Programming (OOP)',
        content: 'Dart is a fully object-oriented language. Key concepts include:',
        list: [
          'Class and Object',
          'Constructor',
          'Inheritance',
          'Polymorphism',
          'Method Overriding',
        ],
        highlights: [
          'Note: Strong understanding of OOP is essential for building Flutter UIs using widgets.',
        ],
      },
      {
        heading: 'Classes & Objects',
        code: `class Car {\n  String brand;\n\n  // Constructor\n  Car(this.brand);\n\n  void start() {\n    print("Started: \$brand");\n  }\n}\n\nvar myCar = Car("Toyota");\nmyCar.start();   // Output: Started: Toyota`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Constructors',
        content: 'Dart supports default constructors and named constructors.',
        code: `class Point {\n  int x, y;\n\n  Point(this.x, this.y);                    // Default constructor\n\n  Point.origin() : x = 0, y = 0;            // Named constructor\n}\n\nvar origin = Point.origin();`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Inheritance & Method Overriding',
        code: `class Animal {\n  void sound() {\n    print("Some sound");\n  }\n}\n\nclass Dog extends Animal {\n  @override\n  void sound() {\n    print("Woof!");\n  }\n}\n\nDog dog = Dog();\ndog.sound();   // Output: Woof!`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Null Safety',
        content: 'Dart has sound null safety built into the language to prevent null reference errors at compile time.',
        subSections: [
          {
            heading: 'Common Null Safety Operators',
            list: [
              '? → Nullable type',
              '?? → Null-coalescing (if null, use default value)',
              '! → Null assertion (I am sure it is not null)',
            ],
          },
        ],
      },
      {
        heading: 'Functional Operations on Collections (map & where)',
        code: `// map: transform each element\nvar doubled = [1, 2, 3, 4, 5].map((e) => e * 2).toList();\n// Result: [2, 4, 6, 8, 10]\n\n// where: filter elements\nvar evenNumbers = [1, 2, 3, 4, 5, 6].where((e) => e % 2 == 0).toList();\n// Result: [2, 4, 6]`,
        codeLanguage: 'dart',
        highlights: [
          'These operations are lazy until you call .toList(), .toSet(), or iterate over them.',
        ],
      },
      {
        heading: 'Exception Handling (try / catch / finally)',
        code: `try {\n  // Code that may throw an exception\n} on FormatException catch (e) {\n  // Handle specific exception\n} catch (e, stackTrace) {\n  // Handle any exception\n  print("Error: \$e");\n} finally {\n  // Always executed (cleanup)\n  print("Done parsing.");\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Asynchronous Programming',
        subSections: [
          {
            heading: 'Future & async/await',
          },
        ],
        code: `Future<String> fetchData() async {\n  await Future.delayed(Duration(seconds: 1));\n  return "Data loaded successfully";\n}\n\nvoid main() async {\n  print(await fetchData());\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Streams',
        content: 'A Stream is a sequence of asynchronous events (values) delivered over time.',
        list: [
          'Single-subscription stream (default): Only one listener',
          'Broadcast stream: Multiple listeners',
          'You can listen to a stream using .listen() or await for inside an async function.',
        ],
      },
      {
        heading: 'Mini Lab: Student List',
        code: `class Student {\n  String name;\n  Student(this.name);\n}\n\nvoid main() async {\n  var students = [\n    Student("An"),\n    Student("Binh")\n  ];\n\n  await Future.delayed(Duration(seconds: 1));   // Simulate loading\n  students.forEach((student) => print(student.name));\n}`,
        codeLanguage: 'dart',
        highlights: [
          'Output: An / Binh',
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned:',
        list: [
          'Dart program structure and basic syntax',
          'Data types and variable declarations',
          'Collections (List, Set, Map)',
          'Control flow statements (if, switch, loops)',
          'Functions (including named parameters and arrow syntax)',
          'Object-Oriented Programming basics',
          'Null Safety',
          'Asynchronous programming with Future, async/await, and Streams',
        ],
        subSections: [
          {
            heading: 'Common Pitfalls to Avoid',
            list: [
              'Forgetting semicolons (;)',
              'Ignoring null safety warnings',
              'Mixing synchronous and asynchronous code incorrectly',
              'Overusing var instead of final',
              'Not handling null values properly',
            ],
          },
          {
            heading: 'Best Practices',
            list: [
              'Prefer final over var',
              'Always specify types when possible',
              'Use async/await instead of raw callbacks',
              'Handle null values using ?? or null-aware operators',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Advanced Dart',
    icon: '⚡',
    desc: 'OOP, async/await, Stream, generics và các tính năng nâng cao.',
    contents: [
      'Advanced Language Features: Abstract classes & implicit interfaces, Mixins, Factory constructors, Generics',
      'Async Mastery: Microtask queue vs Event queue, Future chaining vs async/await, Streams, broadcast streams, async*, yield, and transformers',
      'Architecture Foundation: Model / Repository separation, Preparing for BLoC / Riverpod / Provider concepts',
    ],
    sections: [
      {
        heading: 'Overview – Why It Matters',
        content: 'Flutter UI is reactive. Understanding Dart\'s advanced asynchronous programming and OOP concepts helps you build smooth, scalable, and maintainable applications.',
        subSections: [
          {
            heading: 'What You Will Learn',
            list: [
              'Deep OOP concepts used in Flutter internals',
              'Generic programming for creating reusable components',
              'How async and the event loop really work in Dart',
              'Stream architecture behind StreamBuilder',
              'Repository pattern as preparation for state management',
            ],
          },
        ],
      },
      {
        heading: 'Abstract Classes',
        content: 'Abstract classes define a structure without providing full implementation. They force subclasses to implement specific methods.',
        code: `abstract class Shape {\n  double area(); // No body → must be implemented by subclass\n}\n\nclass Circle extends Shape {\n  final double r;\n  Circle(this.r);\n\n  @override\n  double area() => 3.14 * r * r;\n}`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'Why Use Abstract Classes?',
            list: [
              'Enforce a consistent API across subclasses',
              'Enable polymorphism in Flutter\'s widget tree',
              'Serve as a base for complex widget behaviors',
            ],
          },
        ],
        highlights: [
          'In Flutter, State<T> is an abstract class. Widgets override its methods to define their behavior.',
        ],
      },
      {
        heading: 'Implicit Interfaces',
        content: 'In Dart, every class automatically defines an interface. Using implements forces a class to provide its own implementation of all methods.',
        code: `class Bird {\n  void fly() => print("Bird flying");\n}\n\nclass Eagle implements Bird {\n  @override\n  void fly() => print("Eagle gliding");\n}`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'When to Use Implements?',
            list: [
              'To define clear contracts (API rules)',
              'In testing and dependency injection',
              'Flutter plugins heavily use this pattern',
              'Clear separation between what a class should do and how it does it',
            ],
          },
        ],
      },
      {
        heading: 'Extends vs Implements vs Mixins',
        table: {
          headers: ['Keyword', 'Meaning', 'Use Case'],
          rows: [
            ['extends', 'Inherit behavior and implementation', 'Modify or extend an existing class'],
            ['implements', 'Only inherit signature (no behavior)', 'Define a contract, provide custom behavior'],
            ['with', 'Mix in reusable code', 'Share behavior across multiple classes'],
          ],
        },
        highlights: [
          'Real Flutter Examples: StatefulWidget extends Widget / AnimationController implements Listenable',
        ],
      },
      {
        heading: 'Mixins',
        content: 'Mixins allow you to share behavior between classes without using traditional inheritance.',
        code: `mixin Logger {\n  void log(String msg) => print("[LOG] \$msg");\n}\n\nclass AuthService with Logger {\n  void login() {\n    log("login called");\n  }\n}`,
        codeLanguage: 'dart',
        highlights: [
          'Flutter uses mixins extensively for animations, scrolling, and lifecycle management.',
        ],
      },
      {
        heading: 'Mixin Constraints',
        content: 'You can restrict a mixin to only be used with a specific parent class.',
        code: `class Pet {\n  String name;\n  Pet(this.name);\n}\n\nmixin CanBark on Pet {\n  void bark() => print("\$name says woof!");\n}\n\nclass Dog extends Pet with CanBark {\n  Dog() : super("Buddy");\n}`,
        codeLanguage: 'dart',
        highlights: [
          'This prevents misuse (e.g., applying CanFly to a Fish).',
        ],
      },
      {
        heading: 'Factory Constructors',
        content: 'A factory constructor allows you to control how an instance is created. It does not always return a new object.',
        subSections: [
          {
            heading: 'Use Cases',
            list: [
              'Caching instances',
              'JSON parsing',
              'Singleton pattern',
              'Dependency injection',
            ],
          },
        ],
        code: `class User {\n  final String name;\n\n  factory User.fromJson(Map<String, dynamic> json) {\n    return User._(json['name']);\n  }\n\n  User._(this.name); // Private constructor\n}`,
        codeLanguage: 'dart',
        highlights: [
          'Practical Flutter Usage: JSON model parsing (User.fromJson), Theme/TextStyle/Color creation, Caching and dependency injection',
        ],
      },
      {
        heading: 'Generics Overview',
        content: 'Generics let you write type-safe reusable code. They are used everywhere in Flutter: Future<T>, Stream<T>, List<T>, Map<K, V>, etc.',
        code: `List<String> students = ["Anna", "Ben"];\nMap<String, int> scores = {"Anna": 95};`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'Benefits',
            list: [
              'Compile-time type safety',
              'Prevents misuse of dynamic',
              'Makes code more flexible and reusable',
            ],
          },
        ],
      },
      {
        heading: 'Generic Class Example',
        code: `class Box<T> {\n  T value;\n  Box(this.value);\n\n  void show() => print("Value = \$value");\n}\n\nvoid main() {\n  Box<int>(10).show();     // Output: Value = 10\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Generic Constraints',
        content: 'You can restrict the type parameter to be a subclass of a specific class.',
        code: `abstract class Animal {\n  String sound();\n}\n\nclass Cat extends Animal {\n  @override\n  String sound() => "Meow";\n}\n\nclass Box<T extends Animal> {\n  T pet;\n  Box(this.pet);\n\n  void play() => print(pet.sound());\n}`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'Why Useful?',
            list: [
              'Guarantees shared behavior',
              'Improves API design',
              'Prevents incorrect usage',
            ],
          },
        ],
      },
      {
        heading: 'Collection-if, Collection-for, and Spread Operator',
        content: 'Dart provides powerful syntax for building collections functionally.',
        code: `var base = [1, 2, 3];\n\nvar list = [\n  ...base,                    // spread operator\n  if (true) 99,               // collection if\n  for (var x in base) x * 10  // collection for\n];\n\nprint(list); // Output: [1, 2, 3, 99, 10, 20, 30]`,
        codeLanguage: 'dart',
        highlights: [
          'Critical in Flutter: Used heavily in children: [...widgets] for dynamic UI lists.',
        ],
      },
      {
        heading: 'Custom Exceptions',
        content: 'Create domain-specific exceptions instead of using raw strings for better error handling.',
        code: `class LoginException implements Exception {\n  final String msg;\n  LoginException(this.msg);\n}`,
        codeLanguage: 'dart',
        highlights: [
          'Throwing meaningful exceptions in repositories makes debugging UI logic much easier.',
        ],
      },
      {
        heading: 'Event Loop & Microtasks',
        content: 'Understanding Dart\'s async execution model is essential for smooth UI performance.',
        table: {
          headers: ['Queue', 'Priority', 'Handles'],
          rows: [
            ['Microtask Queue', 'Highest', 'Immediate internal operations'],
            ['Event Queue', 'Normal', 'Futures, timers, UI events'],
          ],
        },
        code: `import 'dart:async';\n\nvoid main() {\n  print("A");\n  scheduleMicrotask(() => print("micro"));\n  Future(() => print("future"));\n  print("B");\n}`,
        codeLanguage: 'dart',
        highlights: [
          'Microtasks always run before the next event.',
          'Output order: A → B → micro → future',
        ],
      },
      {
        heading: 'Future Chaining',
        content: 'Chain multiple async operations without deep nesting.',
        code: `Future(() => 1)\n    .then((v) => v + 1)\n    .then((v) => print(v));   // Output: 2`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Streams – Generators, Controllers & Broadcast',
        subSections: [
          { heading: 'Stream Generator (async* and yield)' },
        ],
        code: `// Stream Generator\nStream<int> nums() async* {\n  for (int i = 1; i <= 3; i++) {\n    yield i;\n  }\n}\n\n// Broadcast Stream with Controller\nvar controller = StreamController<int>.broadcast();\n\ncontroller.stream.listen((v) => print("A: \$v"));\ncontroller.stream.listen((v) => print("B: \$v"));\n\ncontroller..add(1)..add(2);\n// Output: A:1  B:1  A:2  B:2`,
        codeLanguage: 'dart',
        highlights: [
          'async* + yield → recursive fetching, paginated APIs',
          'Broadcast streams → event buses, shared UI signals',
        ],
      },
      {
        heading: 'Repository Pattern Introduction',
        content: 'The Repository Pattern separates data fetching logic from the UI layer.',
        subSections: [
          {
            heading: 'Flow',
            content: 'UI → Repository → Data Source (API / Database)',
          },
          {
            heading: 'Benefits',
            list: [
              'Testable',
              'Maintainable',
              'Works perfectly with BLoC, Riverpod, and Provider',
            ],
          },
        ],
        code: `// Repository with Future\nclass UserRepository {\n  Future<String> getUser() async {\n    await Future.delayed(const Duration(milliseconds: 300));\n    return "Anna";\n  }\n}\n\n// Repository with Stream\nStream<int> counter() async* {\n  for (int i = 1; i <= 3; i++) {\n    await Future.delayed(const Duration(milliseconds: 300));\n    yield i;\n  }\n}`,
        codeLanguage: 'dart',
        highlights: [
          'In Flutter, you can use StreamBuilder to listen to repository streams for live updates (chat, notifications, counters, etc.).',
        ],
      },
      {
        heading: 'Performance Best Practices',
        content: 'Architecture Flow: Model → Repository → Stream/Future → Widgets (rebuild)',
        list: [
          'Never block the main isolate with heavy computations in the UI thread',
          'Use const widgets to reduce rebuild costs',
          'Always perform I/O operations asynchronously',
          'Use Isolates for heavy CPU tasks (covered in later modules)',
        ],
      },
      {
        heading: 'Practice Task',
        content: 'Goal: Simulate a data layer using advanced Dart features.',
        subSections: [
          {
            heading: 'Requirements',
            list: [
              'Create a Product model',
              'Create a Repository class that returns: Future<List<Product>>',
              'Create a Repository class that returns: Stream<Product> (for live additions)',
              'Print results to the console',
            ],
          },
        ],
        highlights: [
          'This task builds the foundation for real app data flow and prepares you for state management patterns like BLoC and Riverpod.',
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned:',
        list: [
          'Advanced OOP concepts (Abstract classes, Mixins, Factory constructors, Implicit interfaces)',
          'Generics and collection syntax',
          'Custom exceptions',
          'Deep understanding of Dart\'s async model (Event Loop, Microtasks, Future chaining)',
          'Streams (async*, yield, broadcast)',
          'Repository Pattern',
        ],
        highlights: [
          'These concepts are essential for building scalable and maintainable Flutter applications.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Flutter UI Fundamentals',
    icon: '🎨',
    desc: 'Widget cơ bản, layout, styling và xây dựng giao diện.',
    contents: [
      'Introduction: Everything is a Widget',
      'Core Widgets (Text, Image, Icon, Card, ListTile)',
      'Input Widgets (Slider, Switch, Radio, Pickers)',
      'Layout Basics (Column, Row, ListView, Padding)',
      'App Structure (Scaffold, Theme, Navigation)',
      'Design Polish (Spacing, Consistency)',
      'Common Errors & Fixes',
      'Practice Task & Summary',
    ],
    sections: [
      {
        heading: 'Everything is a Widget',
        content: 'In Flutter, the entire user interface is built by composing widgets.',
        subSections: [
          {
            heading: 'Widgets describe',
            list: [
              'Structure (layout)',
              'Appearance (style)',
              'Behavior (interaction)',
            ],
          },
        ],
        highlights: [
          'Key Concept: Think of widgets as LEGO blocks. You combine small widgets to build complex screens. Understanding this concept helps you break down any UI into reusable pieces.',
          'Comparison: Similar to HTML tags or React components.',
          'Question for students: "What UI elements on this screen can be represented as widgets?"',
        ],
      },
      {
        heading: 'Material Icons',
        content: 'Flutter provides a rich set of icons from the Material Design Icons library. They ensure consistent UI across different devices.',
        subSections: [
          {
            heading: 'Common Uses',
            list: [
              'Navigation buttons',
              'Action buttons (add, delete, edit)',
              'Status indicators',
            ],
          },
        ],
        highlights: [
          'Tip: Test and change icon size/color quickly in DartPad for instant feedback.',
        ],
      },
      {
        heading: 'Image Widget',
        content: 'The Image widget displays pictures using Image.network() or Image.asset(). Use BoxFit to control how the image scales.',
        highlights: [
          'Common Use Cases: Movie posters, product images, banners.',
        ],
      },
      {
        heading: 'DatePicker',
        content: 'showDatePicker() displays a Material-style calendar dialog for date selection.',
        subSections: [
          {
            heading: 'Common Use Cases',
            list: [
              'Booking apps',
              'Calendar tasks',
              'Forms (date of birth, appointment date)',
            ],
          },
        ],
        code: `import 'package:flutter/material.dart';\n\nvoid main() => runApp(const DatePickerApp());\n\nclass DatePickerApp extends StatelessWidget {\n  const DatePickerApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(title: const Text("Date Picker Demo")),\n        body: const DatePickerExample(),\n      ),\n    );\n  }\n}\n\nclass DatePickerExample extends StatefulWidget {\n  const DatePickerExample({super.key});\n\n  @override\n  State<DatePickerExample> createState() => _DatePickerExampleState();\n}\n\nclass _DatePickerExampleState extends State<DatePickerExample> {\n  DateTime? selectedDate;\n\n  Future<void> pickDate() async {\n    final date = await showDatePicker(\n      context: context,\n      initialDate: DateTime.now(),\n      firstDate: DateTime(2000),\n      lastDate: DateTime(2100),\n    );\n    if (date != null) {\n      setState(() => selectedDate = date);\n    }\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Center(\n      child: Column(\n        mainAxisAlignment: MainAxisAlignment.center,\n        children: [\n          Text(selectedDate == null\n              ? "No date selected"\n              : "Selected: \${selectedDate!.toLocal()}".split(' ')[0]),\n          const SizedBox(height: 16),\n          ElevatedButton(\n            onPressed: pickDate,\n            child: const Text("Pick Date"),\n          ),\n        ],\n      ),\n    );\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'TimePicker',
        content: 'showTimePicker() opens a Material time selection dialog.',
        highlights: [
          'Use Cases: Appointment scheduling, alarms, movie showtimes.',
        ],
      },
      {
        heading: 'RadioListTile (Single Choice Selection)',
        content: 'RadioListTile allows users to select one option from a group.',
        subSections: [
          {
            heading: 'Common Use Cases',
            list: [
              'Settings menus',
              'Video quality selection',
              'Filters',
            ],
          },
        ],
        code: `class _RadioScreenState extends State<RadioScreen> {\n  String? quality = 'HD';\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('RadioListTile')),\n      body: Column(\n        children: [\n          RadioListTile<String>(\n            title: const Text('SD'),\n            value: 'SD',\n            groupValue: quality,\n            onChanged: (v) => setState(() => quality = v),\n          ),\n          RadioListTile<String>(\n            title: const Text('HD'),\n            value: 'HD',\n            groupValue: quality,\n            onChanged: (v) => setState(() => quality = v),\n          ),\n          RadioListTile<String>(\n            title: const Text('4K'),\n            value: '4K',\n            groupValue: quality,\n            onChanged: (v) => setState(() => quality = v),\n          ),\n        ],\n      ),\n    );\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Slider (Continuous Value Adjustment)',
        content: 'Slider lets users select a value continuously within a range.',
        subSections: [
          {
            heading: 'Key Properties',
            list: ['value', 'min', 'max', 'onChanged', 'divisions', 'label'],
          },
        ],
        code: `class _SliderScreenState extends State<SliderScreen> {\n  double value = 0.5;\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Slider')),\n      body: Column(\n        mainAxisAlignment: MainAxisAlignment.center,\n        children: [\n          Slider(\n            value: value,\n            onChanged: (v) => setState(() => value = v),\n          ),\n          Text('Value: \${value.toStringAsFixed(2)}'),\n        ],\n      ),\n    );\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Switch (Boolean Toggle)',
        content: 'Switch toggles between ON/OFF states.',
        subSections: [
          {
            heading: 'Common Use Cases',
            list: [
              'Enable notifications',
              'Dark mode',
              'Feature toggles',
            ],
          },
        ],
        code: `class _SwitchScreenState extends State<SwitchScreen> {\n  bool isOn = false;\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text('Switch Example')),\n      body: Center(\n        child: Row(\n          mainAxisSize: MainAxisSize.min,\n          children: [\n            const Text('Dark Mode'),\n            Switch(\n              value: isOn,\n              onChanged: (v) => setState(() => isOn = v),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Scaffold',
        content: 'Scaffold is the basic structure for a Material Design screen. It provides slots for AppBar, body, floatingActionButton, bottomNavigationBar, etc.',
        code: `return Scaffold(\n  appBar: AppBar(title: const Text('Now Playing')),\n  body: const Center(child: Text('Hello Scaffold')),\n  floatingActionButton: FloatingActionButton(\n    onPressed: () {},\n    child: const Icon(Icons.add),\n  ),\n);`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Theme & Dark Mode',
        content: 'ThemeData defines global colors, typography, and shapes for the entire app.',
        code: `MaterialApp(\n  theme: ThemeData.light(useMaterial3: true),\n  darkTheme: ThemeData.dark(useMaterial3: true),\n  themeMode: ThemeMode.system,   // or ThemeMode.dark\n  home: const DemoTheme(),\n);`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Sectioned Home Screen (Column + Padding + ListView)',
        content: 'Common pattern in movie, e-commerce, and news apps.',
        code: `body: ListView(\n  padding: const EdgeInsets.all(12),\n  children: [\n    section('Now Playing'), const Placeholder(fallbackHeight: 120),\n    section('Trending'), const Placeholder(fallbackHeight: 120),\n    // ...\n  ],\n),`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Bottom Navigation Bar',
        content: 'Used for switching between main app sections (2–5 tabs).',
        code: `bottomNavigationBar: BottomNavigationBar(\n  currentIndex: index,\n  onTap: (i) => setState(() => index = i),\n  items: const [\n    BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),\n    BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),\n    BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),\n  ],\n),`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Card + ListTile & ListView Basics',
        content: 'Standard Material Design pattern for displaying concise information.',
        subSections: [
          {
            heading: 'ListView variants',
            list: [
              'ListView.separated – with dividers',
              'ListView.builder – for dynamic/long lists',
            ],
          },
        ],
        code: `ListView.builder(\n  itemCount: movies.length,\n  itemBuilder: (_, i) {\n    final m = movies[i];\n    return ListTile(\n      leading: CircleAvatar(child: Text(m['title']![0])),\n      title: Text(m['title']!),\n      subtitle: Text(m['year']!),\n      trailing: const Icon(Icons.chevron_right),\n      onTap: () => debugPrint('Selected \${m['title']}'),\n    );\n  },\n),`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Layout Polish (Padding & SizedBox)',
        content: 'Good spacing significantly improves perceived UI quality.',
        highlights: [
          'Best Practice: Use consistent spacing scale (EdgeInsets.all(12), SizedBox(height: 8), etc.).',
          'VS Code Tip: Use "Wrap with Widget" (Alt + Enter) to quickly wrap widgets with Padding, Center, Expanded, etc.',
        ],
      },
      {
        heading: 'Common Errors & Fixes',
        table: {
          headers: ['Error', 'Cause', 'Fix'],
          rows: [
            ['ListView inside Column', 'Infinite height', 'Wrap ListView with Expanded'],
            ['Overflow on small screens', 'Content too large', 'Use SingleChildScrollView or Flexible'],
            ['UI not updating', 'Forgot to call setState()', 'Add setState(() {})'],
            ['Picker fails', 'Invalid BuildContext', 'Ensure context is from a mounted widget'],
          ],
        },
      },
      {
        heading: 'Practice Task',
        content: 'Task: Build a simple movie list screen.',
        subSections: [
          {
            heading: 'Requirements',
            list: [
              'Use ListView.builder + ListTile',
              'Display movie title and year',
              'On tap → show a SnackBar with the movie title',
              'Bonus: Replace leading avatar with an emoji or poster image using Image.network',
            ],
          },
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned:',
        list: [
          'The fundamental concept: Everything is a Widget',
          'How to build screens using Scaffold, AppBar, and body',
          'Core widgets: Image, Card, ListTile, ListView',
          'Interactive widgets: Switch, Slider, RadioListTile, DatePicker, TimePicker',
          'Applying ThemeData and supporting Dark Mode',
          'Improving layout with Padding, SizedBox, and consistent spacing',
          'Common layout errors and how to fix them',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Navigation & State Management',
    icon: '🧭',
    desc: 'Điều hướng màn hình và quản lý trạng thái trong Flutter.',
    contents: [
      'Understanding Navigation in Flutter',
      'Navigator 1.0 (Imperative Navigation)',
      'Named Routes',
      'Navigator 2.0 (Declarative Navigation)',
      'Deep Linking',
      'Managing App State',
      'Stateless vs Stateful Widgets',
      'setState() and Lifting State Up',
      'InheritedWidget',
      'Provider',
      'Combining Navigation and State Management',
      'Practice Task & Summary',
    ],
    sections: [
      {
        heading: 'Introduction',
        content: 'This module connects UI fundamentals (from Module 4) with navigation and data flow. You will learn how to move between screens and how to manage state effectively across multiple screens.',
      },
      {
        heading: 'What is Navigation?',
        content: 'Navigation in Flutter controls movement between different screens (routes). The Navigator widget maintains a stack of pages. When you navigate to a new screen, it is pushed onto the stack. When you go back, the top page is popped off the stack.',
        table: {
          headers: ['Method', 'Purpose'],
          rows: [
            ['push()', 'Add a new route to the stack'],
            ['pop()', 'Remove the current route from the stack'],
            ['pushReplacement()', 'Replace current route with a new one'],
            ['pushNamed()', 'Navigate using a named route'],
            ['maybePop()', 'Conditionally pop a route'],
          ],
        },
      },
      {
        heading: 'Navigator 1.0 (Imperative Navigation)',
        content: 'Navigator 1.0 uses an imperative approach — you explicitly tell Flutter when and how to navigate.',
        subSections: [
          {
            heading: 'Flow',
            list: [
              'App starts at the initial screen',
              'push() → New screen is added to the top of the stack',
              'User sees the new screen',
              'pop() → Return to previous screen (top screen is removed)',
            ],
          },
        ],
        code: `// Basic Navigation\nNavigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => const SecondPage()),\n);\n\n// Full Working Example\nimport 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      debugShowCheckedModeBanner: false,\n      home: const HomePage(),\n    );\n  }\n}\n\nclass HomePage extends StatelessWidget {\n  const HomePage({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text("Home")),\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () {\n            Navigator.push(\n              context,\n              MaterialPageRoute(builder: (_) => const SecondPage()),\n            );\n          },\n          child: const Text('Go to Second Page'),\n        ),\n      ),\n    );\n  }\n}\n\nclass SecondPage extends StatelessWidget {\n  const SecondPage({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text("Second Page")),\n      body: Center(\n        child: ElevatedButton(\n          onPressed: () => Navigator.pop(context),\n          child: const Text("Back"),\n        ),\n      ),\n    );\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Named Routes',
        content: 'Named routes make navigation cleaner and more scalable, especially in large applications.',
        code: `// Setup\nMaterialApp(\n  initialRoute: '/',\n  routes: {\n    '/': (context) => const HomePage(),\n    '/profile': (context) => const ProfilePage(),\n  },\n);\n\n// Navigate\nNavigator.pushNamed(context, '/profile');`,
        codeLanguage: 'dart',
        highlights: [
          'Advantages: Better readability, easier to manage, and supports passing arguments.',
        ],
      },
      {
        heading: 'Navigator 2.0 (Declarative Navigation)',
        content: 'Navigator 2.0 uses a declarative approach. Instead of calling push() and pop(), you describe the entire navigation stack based on app state.',
        subSections: [
          {
            heading: 'Main Components',
            list: [
              'RouterDelegate',
              'RouteInformationParser',
              'BackButtonDispatcher',
            ],
          },
        ],
        highlights: [
          'Navigator 2.0 aligns better with web-style navigation and deep linking.',
        ],
      },
      {
        heading: 'Deep Linking',
        content: 'Deep linking allows users to open a specific screen directly via a URL or external link.',
        highlights: [
          'Example URL: movieapps://movies?id=12',
        ],
        subSections: [
          {
            heading: 'Setting Up Deep Links on Android',
            content: 'Add intent filter in AndroidManifest.xml:',
          },
        ],
        code: `<!-- AndroidManifest.xml -->\n<intent-filter>\n  <action android:name="android.intent.action.VIEW" />\n  <category android:name="android.intent.category.DEFAULT" />\n  <category android:name="android.intent.category.BROWSABLE" />\n  <data android:scheme="movieapps" android:host="movies" />\n</intent-filter>\n\n<!-- Test with ADB -->\nadb shell am start -a android.intent.action.VIEW -d "movieapps://movies?id=12"`,
        codeLanguage: 'bash',
      },
      {
        heading: 'Deep Linking on iOS',
        list: [
          'Enable Associated Domains capability in Xcode.',
          'Add domain: applinks:movieapps.com',
          'Edit Info.plist to add URL Types with scheme movieapps.',
        ],
      },
      {
        heading: 'Building Movie Detail Page (Step-by-Step)',
        content: 'Step 1: Basic Scaffold',
        code: `class MovieDetailPage extends StatelessWidget {\n  const MovieDetailPage({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: const Text("Movie Detail")),\n      body: const Center(child: Text("Coming soon...")),\n    );\n  }\n}`,
        codeLanguage: 'dart',
        highlights: [
          'Step 2–6: Add Hero banner with gradient, title & genres, overview, action buttons, and trailer list using Stack, Column, Wrap, Row, and ListView.builder.',
        ],
      },
      {
        heading: 'Managing App State',
        content: 'State determines what the user sees. Proper state management keeps the UI consistent and predictable.',
        table: {
          headers: ['Type', 'Rebuilds on Change', 'Use Case'],
          rows: [
            ['StatelessWidget', 'No', 'Static UI (logo, text, icons)'],
            ['StatefulWidget', 'Yes', 'Interactive UI (forms, counters)'],
          ],
        },
      },
      {
        heading: 'setState() and Lifting State Up',
        list: [
          'setState() triggers a rebuild of the widget.',
          'Lifting State Up: Move state to a common ancestor so multiple child widgets can share and update the same state.',
        ],
      },
      {
        heading: 'InheritedWidget',
        content: 'Allows data to be passed down the widget tree efficiently without passing it through every level.',
      },
      {
        heading: 'Provider (Recommended Simple Solution)',
        content: 'Provider is built on top of InheritedWidget but with much less boilerplate.',
        code: `ChangeNotifierProvider(\n  create: (_) => CounterModel(),\n  child: const CounterPage(),\n);\n\nclass CounterModel with ChangeNotifier {\n  int count = 0;\n  void increment() {\n    count++;\n    notifyListeners();\n  }\n}\n\nConsumer<CounterModel>(\n  builder: (_, counter, __) => Text('\${counter.count}'),\n);`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Combining Navigation & State Management',
        content: 'State and navigation often work together.',
        code: `if (appState.loggedIn) {\n  Navigator.pushNamed(context, '/dashboard');\n} else {\n  Navigator.pushNamed(context, '/login');\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Practice Task',
        content: 'Build a small Movie App with:',
        list: [
          'Deep link support that opens the Movie Detail page',
          'Provider to manage favorite movies state',
          'Proper back button navigation',
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned:',
        list: [
          'Navigator 1.0 (imperative) vs Navigator 2.0 (declarative)',
          'Named routes and deep linking setup on Android & iOS',
          'Different state management approaches: setState(), InheritedWidget, and Provider',
          'How to integrate navigation with state management',
        ],
        highlights: [
          'These skills are essential for building multi-screen Flutter applications with smooth user experience.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Responsive UI & Adaptive Layouts',
    icon: '📱',
    desc: 'Xây dựng giao diện responsive cho nhiều kích thước màn hình.',
    contents: [
      'What Responsive UI means',
      'Responsive vs Adaptive UI',
      'MediaQuery for screen information',
      'LayoutBuilder for constraint-based rendering',
      'OrientationBuilder for device rotation',
      'Responsive widgets (Expanded, Flexible, Wrap, GridView, etc.)',
      'Real case study: Movie Genre Screen',
      'Best practices and testing on multiple devices',
    ],
    sections: [
      {
        heading: 'Overview',
        content: 'Crafting Flutter UIs that scale beautifully across phones, tablets, foldables, desktops, and web browsers from a single codebase.',
        highlights: [
          'Instructor Note: Emphasize that one Flutter codebase must handle vastly different screen sizes and device types. This is one of the most practical and important modules because it directly affects every screen you build.',
        ],
      },
      {
        heading: 'Why Responsive UI Matters',
        content: 'Flutter runs on:',
        list: [
          'Small phones',
          'Large phones',
          'Tablets',
          'Foldable devices',
          'Desktop browsers',
        ],
        subSections: [
          {
            heading: 'Without responsive design, you will face',
            list: [
              'Overflow errors',
              'Misaligned widgets',
              'Text clipping',
              'Poor user experience',
            ],
          },
        ],
        highlights: [
          'Live Demo Tip: Ask students to rotate their emulators now to see how layouts can break.',
        ],
      },
      {
        heading: 'Responsive vs Adaptive UI',
        table: {
          headers: ['Type', 'Definition', 'Example'],
          rows: [
            ['Responsive', 'Layout changes based on available screen space', 'Column → Row, 2-column grid → 4-column grid'],
            ['Adaptive', 'Layout changes based on device type', 'BottomNavigationBar → NavigationRail (tablet), Drawer → Sidebar (desktop)'],
          ],
        },
        code: `final width = MediaQuery.of(context).size.width;\nif (width < 600) return MobileView();\nreturn TabletView();`,
        codeLanguage: 'dart',
      },
      {
        heading: 'MediaQuery: Getting Screen Information',
        content: 'MediaQuery provides real-time information about the device and screen:',
        list: [
          'Screen width & height',
          'Orientation',
          'Safe area padding',
          'Pixel density (devicePixelRatio)',
        ],
        code: `final width = MediaQuery.of(context).size.width;\nfinal height = MediaQuery.of(context).size.height;\nfinal orientation = MediaQuery.of(context).orientation;`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Using Breakpoints',
        content: 'Define layout rules based on screen width:',
        list: [
          '< 400px → Small layout',
          '400–800px → Medium layout',
          '> 800px → Large layout',
        ],
        code: `final width = MediaQuery.of(context).size.width;\n\nreturn Scaffold(\n  body: Center(\n    child: Text(\n      width < 600 ? "Mobile Layout" : "Tablet Layout",\n      style: const TextStyle(fontSize: 24),\n    ),\n  ),\n);`,
        codeLanguage: 'dart',
      },
      {
        heading: 'LayoutBuilder',
        content: 'LayoutBuilder gives you the constraints from the parent widget (not the full screen size). It is perfect for building responsive components.',
        code: `LayoutBuilder(\n  builder: (context, constraints) {\n    return constraints.maxWidth > 500\n        ? const WideCard()\n        : const NarrowCard();\n  },\n);`,
        codeLanguage: 'dart',
      },
      {
        heading: 'OrientationBuilder',
        content: 'Detects when the device is rotated between portrait and landscape.',
        code: `OrientationBuilder(\n  builder: (context, orientation) {\n    return orientation == Orientation.portrait\n        ? const PortraitUI()\n        : const LandscapeUI();\n  },\n);`,
        codeLanguage: 'dart',
        highlights: [
          'Live Demo: Ask students to rotate the emulator while running the app.',
        ],
      },
      {
        heading: 'Responsive Widgets Overview',
        table: {
          headers: ['Widget', 'Purpose'],
          rows: [
            ['Expanded', 'Prevents overflow in Row/Column'],
            ['Flexible', 'Controls flex factor'],
            ['Wrap', 'Auto-wraps children to new lines'],
            ['AspectRatio', 'Maintains aspect ratio (good for images)'],
            ['FractionallySizedBox', 'Size based on percentage of parent'],
            ['GridView', 'Responsive multi-column layouts'],
          ],
        },
        highlights: [
          'Note: Wrap is especially powerful for genre chips and tag lists.',
        ],
      },
      {
        heading: 'Responsive GridView',
        code: `GridView.count(\n  crossAxisCount: width < 600 ? 2 : width < 900 ? 3 : 4,\n  childAspectRatio: 0.7,\n  children: movieCards,\n);`,
        codeLanguage: 'dart',
        list: [
          'Mobile: 2 columns',
          'Tablet: 3–4 columns',
          'Desktop: 5–6 columns',
        ],
      },
      {
        heading: 'SafeArea',
        content: 'Modern devices have notches, Dynamic Island, and curved screens. SafeArea ensures content is not hidden behind system UI.',
        code: `SafeArea(\n  child: Scaffold(...),\n)`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Real Case Study: Movie Genre Screen',
        content: 'Apply all concepts to build a realistic, fully responsive screen.',
        subSections: [
          { heading: '1. Responsive Search Bar' },
        ],
        code: `// 1. Responsive Search Bar\nSafeArea(\n  child: Padding(\n    padding: const EdgeInsets.symmetric(horizontal: 16),\n    child: TextField(...),\n  ),\n)\n\n// 2. Genre Chips (Using Wrap)\nWrap(\n  spacing: 8,\n  runSpacing: 8,\n  children: genres.map((genre) => Chip(label: Text(genre))).toList(),\n)\n\n// 3. Sort Dropdown\nDropdownButton<String>(\n  value: selectedSort,\n  items: [...],\n  onChanged: (value) => setState(() => selectedSort = value!),\n)\n\n// 4. Responsive Movie Card\nLayoutBuilder(\n  builder: (context, constraints) {\n    final isWide = constraints.maxWidth > 600;\n    return Row(\n      children: [\n        Image.network(poster, width: isWide ? 150 : 100),\n        const SizedBox(width: 16),\n        Expanded(child: Text(title)),\n      ],\n    );\n  },\n);`,
        codeLanguage: 'dart',
        highlights: [
          'Chips automatically wrap to the next line when space is limited.',
        ],
      },
      {
        heading: 'Completed Responsive Genre Screen – Features',
        list: [
          'Responsive search bar',
          'Dynamic Wrap-based genre chips',
          'Sort dropdown',
          'Responsive movie list using GridView or ListView',
        ],
      },
      {
        heading: 'Lab Exercises',
        subSections: [
          {
            heading: 'Lab 6.1 – Responsive Hero Section',
            content: 'Create a responsive banner that scales width, height, and button sizes based on breakpoints.',
          },
          {
            heading: 'Lab 6.2 – Rebuild the Genre Screen',
            list: [
              'Responsive search bar',
              'Wrap-based genre chips',
              'Sort dropdown',
              'Responsive movie list',
              'Test on phone, large phone, and tablet sizes',
            ],
          },
          {
            heading: 'Lab 6.3 – Tablet Layout Enhancement (Screens > 800px)',
            list: [
              'Add sidebar filter',
              'Change to 2-column movie list',
              'Increase spacing',
            ],
          },
        ],
      },
      {
        heading: 'Best Practices',
        list: [
          'Avoid hard-coded sizes (e.g., width: 300)',
          'Prefer constraint-aware widgets (LayoutBuilder, Expanded, Wrap)',
          'Use Wrap instead of Row for long lists of chips',
          'Test frequently on multiple screen sizes (Pixel 2 → Pixel 7 → iPad)',
          'Use Flutter Inspector\'s Layout Explorer for debugging',
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned:',
        list: [
          'The difference between Responsive and Adaptive UI',
          'How to use MediaQuery, LayoutBuilder, and OrientationBuilder',
          'Powerful responsive widgets (Wrap, GridView, Expanded, etc.)',
          'How to build a fully responsive Movie Genre screen',
          'Best practices for production-ready layouts',
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Forms and Validation',
    icon: '📝',
    desc: 'Tạo form, validate dữ liệu và xử lý input người dùng.',
    contents: [
      'Build forms using Form and TextFormField',
      'Use FormState and GlobalKey to validate and save data',
      'Apply built-in and custom validation rules',
      'Manage focus and keyboard interactions',
      'Design user-friendly error messages',
      'Implement a complete signup form with validation',
    ],
    sections: [
      {
        heading: 'Why Forms Matter',
        content: 'Forms are critical in almost every application.',
        subSections: [
          {
            heading: 'Common use cases',
            list: ['Login / Signup', 'Profile update', 'Feedback & contact forms', 'Booking and checkout', 'Search and filtering inputs'],
          },
          {
            heading: 'If forms are done poorly',
            list: ['Users submit invalid or incomplete data', 'Users get frustrated and abandon the app', 'Security and data quality issues appear'],
          },
        ],
        highlights: ['Key Idea: Good apps = Good forms + Good validation.'],
      },
      {
        heading: 'Input Widgets Overview',
        content: 'Core input widgets in Flutter:',
        list: [
          'TextField – Basic text input',
          'TextFormField – Text input with validation support inside a Form',
          'Checkbox, Switch, Radio – Boolean choices',
          'DropdownButton – Pick from a list of options',
          'Date & Time pickers – Select from dialogs',
        ],
        highlights: [
          'Use TextField for simple, one-off inputs.',
          'Use TextFormField inside a Form when validation is needed.',
          'In this course, when we say "form", we almost always mean using TextFormField.',
        ],
      },
      {
        heading: 'Form & FormState',
        content: 'A Form widget groups multiple input fields together. A GlobalKey<FormState> allows you to validate, save, and reset all fields at once.',
        subSections: [
          {
            heading: 'Core methods',
            list: [
              'formKey.currentState!.validate() — validates all fields',
              'formKey.currentState!.save() — saves all field values',
              'formKey.currentState!.reset() — resets all fields',
            ],
          },
        ],
      },
      {
        heading: 'Demo 1: Basic Signup Form',
        content: 'Goal: Create a simple signup form using Form + TextFormField.',
        subSections: [
          {
            heading: 'Requirements',
            list: [
              'Fields: Full Name, Email, Password',
              'All fields are required',
              'Email must contain @ and .',
              'Password must be at least 6 characters',
            ],
          },
          {
            heading: 'Submit Behavior',
            list: ['validate() → Show inline errors', 'If valid → Show SnackBar: "Signup successful"'],
          },
          {
            heading: 'Structure',
            list: ['Scaffold', 'AppBar', 'Form with _formKey', 'TextFormField for name, email, password', 'Submit button'],
          },
        ],
        code: `final _formKey = GlobalKey<FormState>();\n\nForm(\n  key: _formKey,\n  child: Column(\n    children: [\n      TextFormField(\n        decoration: const InputDecoration(labelText: 'Full Name'),\n        validator: (v) => v == null || v.isEmpty ? 'Name is required' : null,\n      ),\n      TextFormField(\n        decoration: const InputDecoration(labelText: 'Email'),\n        validator: (v) {\n          if (v == null || v.isEmpty) return 'Email is required';\n          if (!v.contains('@') || !v.contains('.')) return 'Enter a valid email';\n          return null;\n        },\n      ),\n      TextFormField(\n        obscureText: true,\n        decoration: const InputDecoration(labelText: 'Password'),\n        validator: (v) {\n          if (v == null || v.isEmpty) return 'Password is required';\n          if (v.length < 6) return 'Password must be at least 6 characters';\n          return null;\n        },\n      ),\n      ElevatedButton(\n        onPressed: () {\n          if (_formKey.currentState!.validate()) {\n            _formKey.currentState!.save();\n            ScaffoldMessenger.of(context).showSnackBar(\n              const SnackBar(content: Text('Signup successful')),\n            );\n          }\n        },\n        child: const Text('Submit'),\n      ),\n    ],\n  ),\n)`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Built-in Validators',
        content: 'The validator function signature: String? Function(String? value)',
        list: [
          'If valid → return null',
          'If invalid → return error message (String)',
          'Required field: check if value is null or empty',
          'Email format: check for @ and .',
          'Minimum length: check value.length',
        ],
      },
      {
        heading: 'Demo 2: Custom Validation Rules',
        content: 'Goal: Add strong password and confirm password logic.',
        subSections: [
          {
            heading: 'Requirements',
            list: [
              'Password ≥ 8 characters and must include a number',
              'Confirm password must match the password',
              'Use helper validator functions',
              'Enable AutovalidateMode.onUserInteraction',
            ],
          },
          {
            heading: 'Custom validators for',
            list: [
              'Business rules (username rules, banned words)',
              'Password strength (length, numbers, symbols)',
              'Advanced email validation using regex',
            ],
          },
          {
            heading: 'Confirm Password Logic',
            list: [
              'Store _password in state',
              'Compare confirm password with stored password',
              'Show error if they do not match',
            ],
          },
        ],
        code: `String? validatePassword(String? value) {\n  if (value == null || value.isEmpty) return 'Password is required';\n  if (value.length < 8) return 'Password must be at least 8 characters';\n  if (!value.contains(RegExp(r'[0-9]'))) return 'Password must include a number';\n  return null;\n}\n\nString? validateConfirmPassword(String? value, String password) {\n  if (value != password) return 'Passwords do not match';\n  return null;\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'AutovalidateMode',
        content: 'Controls when validation is triggered automatically.',
        table: {
          headers: ['Mode', 'Behavior'],
          rows: [
            ['AutovalidateMode.disabled', 'Only validates when validate() is called manually'],
            ['AutovalidateMode.always', 'Validates on every change — can be annoying'],
            ['AutovalidateMode.onUserInteraction', 'Validates after the user interacts — recommended'],
          ],
        },
        highlights: [
          'Too early → annoying (red errors appear immediately)',
          'Too late → confusing (errors only appear after submit)',
          'Recommended: AutovalidateMode.onUserInteraction',
        ],
      },
      {
        heading: 'Error Messages & UX',
        content: 'Good error messages should be: short, clear, specific, polite, and helpful.',
        subSections: [
          {
            heading: 'Examples',
            list: ['"Enter a valid email"', '"Password must be at least 8 characters"', '"This email is already taken"'],
          },
          {
            heading: 'Best Practices',
            list: ['Show error under the field', 'Avoid blaming language', 'Highlight only relevant fields'],
          },
        ],
      },
      {
        heading: 'Demo 3: Focus & Keyboard UX',
        content: 'Goal: Improve the input experience on mobile devices.',
        subSections: [
          {
            heading: 'Requirements',
            list: [
              'Create FocusNode for each field',
              'Use textInputAction (Next / Done)',
              'Move focus using onFieldSubmitted',
              'Dismiss keyboard using GestureDetector',
              'Wrap form in ListView to prevent overflow',
            ],
          },
          {
            heading: 'Why manage focus?',
            list: [
              'Mobile keyboards can hide input fields',
              'Users expect "Next" / "Done" to work smoothly',
            ],
          },
          {
            heading: 'Tools',
            list: [
              'FocusNode',
              'textInputAction',
              'onFieldSubmitted',
              'FocusScope.of(context).requestFocus(nextFocusNode)',
            ],
          },
        ],
        code: `final _emailFocus = FocusNode();\nfinal _passwordFocus = FocusNode();\n\nTextFormField(\n  textInputAction: TextInputAction.next,\n  onFieldSubmitted: (_) =>\n    FocusScope.of(context).requestFocus(_passwordFocus),\n  decoration: const InputDecoration(labelText: 'Email'),\n),\n\nTextFormField(\n  focusNode: _passwordFocus,\n  textInputAction: TextInputAction.done,\n  onFieldSubmitted: (_) =>\n    FocusScope.of(context).unfocus(),\n  decoration: const InputDecoration(labelText: 'Password'),\n),`,
        codeLanguage: 'dart',
        highlights: [
          'Wrap the form with GestureDetector to dismiss keyboard on tap outside.',
          'Wrap the form in ListView or SingleChildScrollView to avoid overflow when keyboard appears.',
        ],
      },
      {
        heading: 'Form Layout Patterns',
        subSections: [
          {
            heading: 'Common layouts',
            list: [
              'Single-page scrollable form',
              'Grouped sections (e.g., Personal Info / Account Info)',
              'Multi-step wizard (conceptual)',
            ],
          },
          {
            heading: 'Avoid',
            list: [
              'Too many fields on one screen without grouping',
              'Keyboard covering the submit button',
              'Fixed height containers that do not scroll',
            ],
          },
        ],
      },
      {
        heading: 'Demo 4: Async Email Check (Optional)',
        content: 'Goal: Simulate server-side validation.',
        subSections: [
          {
            heading: 'Requirements',
            list: [
              'Validate form locally first',
              'Show loading state during async check',
              'Fake delay with Future.delayed()',
              'If email starts with "taken" → show error "Email already taken"',
              'Disable Submit button while checking',
            ],
          },
        ],
        code: `Future<void> _checkEmail(String email) async {\n  setState(() => _isLoading = true);\n  await Future.delayed(const Duration(seconds: 1));\n  setState(() {\n    _isLoading = false;\n    if (email.startsWith('taken')) {\n      _emailError = 'Email already taken';\n    }\n  });\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'From Form to Backend',
        content: 'After validation, data flows through the full stack:',
        list: [
          'User fills the form',
          'Local validation (Module 7)',
          'Send data via API (Module 8)',
          'Server performs deeper checks',
          'Server returns success or error',
          'UI updates accordingly',
        ],
      },
      {
        heading: 'Full Signup Form Features',
        list: [
          'Name, Email, Password, Confirm Password fields',
          'Built-in + custom validation',
          'AutovalidateMode.onUserInteraction',
          'Focus management (Next / Done)',
          'Show/hide password toggle',
          'Async email availability check with loading state',
        ],
      },
      {
        heading: 'Labs',
        subSections: [
          { heading: 'Lab 7.1', content: 'Basic registration form' },
          { heading: 'Lab 7.2', content: 'Validation rules & password strength' },
          { heading: 'Lab 7.3', content: 'Focus & keyboard management' },
          { heading: 'Lab 7.4', content: 'Optional async email check' },
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned how to:',
        list: [
          'Build forms using Form and TextFormField',
          'Use FormState and GlobalKey to validate, save, and reset data',
          'Implement required fields and custom validation rules',
          'Manage focus and keyboard interactions on mobile',
          'Show clear error messages and success feedback',
          'Combine everything into a complete signup form',
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Working with RESTful APIs & JSON',
    icon: '🌐',
    desc: 'Gọi API, parse JSON và hiển thị dữ liệu từ server.',
    contents: [
      'HTTP fundamentals & RESTful API concepts',
      'Using the http package for GET and POST requests',
      'Parsing JSON into Dart model classes',
      'Displaying API data with FutureBuilder + ListView',
      'Handling loading, empty, and error states',
      'Service Layer pattern for clean architecture',
    ],
    sections: [
      {
        heading: 'What is an API? What is HTTP?',
        content: 'An API (Application Programming Interface) is a contract that allows clients (your app) to communicate with a server. APIs are usually exposed as a set of URLs called endpoints.',
        subSections: [
          {
            heading: 'HTTP Methods',
            list: ['GET — Retrieve data', 'POST — Create/submit data', 'PUT — Update data', 'DELETE — Remove data'],
          },
          {
            heading: 'HTTP Status Codes',
            list: ['200–299 → Success', '400–499 → Client error', '500–599 → Server error'],
          },
        ],
      },
      {
        heading: 'What is JSON?',
        content: 'JSON (JavaScript Object Notation) is a lightweight, text-based format for exchanging data.',
        list: [
          'Consists of key–value pairs and arrays',
          'Easy for humans to read and write',
          'Maps naturally to Dart structures: Map<String, dynamic> and List<dynamic>',
        ],
        highlights: [
          'JSON received from an API is always a String. You must decode it using json.decode() and then map it to Dart model classes.',
        ],
      },
      {
        heading: 'API Networking in Flutter — The Big Picture',
        content: 'Typical steps when calling an API:',
        list: [
          '1. Choose an endpoint (URL + HTTP method)',
          '2. Send the request using an HTTP client',
          '3. Receive the JSON response',
          '4. Decode JSON and convert it into Dart model classes',
          '5. Update the UI with the received data',
          '6. Handle loading, empty, and error states',
        ],
        highlights: ['All network calls are asynchronous. You must use Future, async/await, and proper state management.'],
      },
      {
        heading: 'Using the http Package',
        content: 'The most common way to make HTTP requests in Flutter.',
        highlights: ['Add to pubspec.yaml: http: ^1.2.0', 'Import: import \'package:http/http.dart\' as http;'],
        code: `import 'package:http/http.dart' as http;\n\n// GET request\nfinal response = await http.get(Uri.parse(url));\n\n// POST request\nfinal response = await http.post(\n  Uri.parse(url),\n  headers: {'Content-Type': 'application/json'},\n  body: json.encode({'title': 'Hello', 'body': 'World'}),\n);`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Demo 8.1: Simple GET Request',
        content: 'Goal: Fetch data from a public REST API using HTTP GET and print the response.',
        highlights: ['Demo API: https://jsonplaceholder.typicode.com/posts'],
        code: `Future<void> fetchPosts() async {\n  final url = Uri.parse('https://jsonplaceholder.typicode.com/posts');\n  final response = await http.get(url);\n  if (response.statusCode == 200) {\n    print('Response body: \${response.body}');\n  } else {\n    print('Request failed: \${response.statusCode}');\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Futures & async/await (Quick Review)',
        list: [
          'Future<T> represents a value that will be available later',
          'async marks a function as asynchronous',
          'await pauses execution until the Future completes',
        ],
        highlights: [
          'Prevents the UI from freezing while waiting for network responses.',
          'Makes asynchronous code readable and maintainable.',
        ],
      },
      {
        heading: 'FutureBuilder: Binding Data to UI',
        content: 'FutureBuilder integrates async operations directly into the widget tree and automatically handles all states.',
        table: {
          headers: ['State', 'What to Show'],
          rows: [
            ['ConnectionState.waiting', 'CircularProgressIndicator (loading)'],
            ['snapshot.hasError', 'Error message + Retry button'],
            ['!snapshot.hasData || data is empty', '"No data available"'],
            ['snapshot.hasData', 'Build UI with received data'],
          ],
        },
        code: `FutureBuilder<List<Post>>(\n  future: ApiService.fetchPosts(),\n  builder: (context, snapshot) {\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return const CircularProgressIndicator();\n    }\n    if (snapshot.hasError) {\n      return Text('Error: \${snapshot.error}');\n    }\n    if (!snapshot.hasData || snapshot.data!.isEmpty) {\n      return const Text('No posts found.');\n    }\n    return ListView.builder(\n      itemCount: snapshot.data!.length,\n      itemBuilder: (_, i) => ListTile(title: Text(snapshot.data![i].title)),\n    );\n  },\n)`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Parsing JSON into Dart Models',
        content: 'Why create model classes? Type safety, clear data structure, easier to maintain and reuse.',
        code: `class Post {\n  final int id;\n  final String title;\n  final String body;\n\n  Post({required this.id, required this.title, required this.body});\n\n  factory Post.fromJson(Map<String, dynamic> json) {\n    return Post(\n      id: json['id'] as int,\n      title: json['title'] as String,\n      body: json['body'] as String,\n    );\n  }\n}`,
        codeLanguage: 'dart',
        highlights: ['factory Post.fromJson() is the standard pattern for converting a JSON Map to a typed Dart object.'],
      },
      {
        heading: 'Converting JSON List to List<Model>',
        content: 'Key process for converting a JSON array response to a typed Dart list:',
        code: `final List<dynamic> jsonList = json.decode(response.body);\nfinal List<Post> posts = jsonList\n    .map((item) => Post.fromJson(item as Map<String, dynamic>))\n    .toList();`,
        codeLanguage: 'dart',
        highlights: [
          'json.decode() returns List<dynamic>.',
          'Use .map() to convert each item to a Model.',
          'Call .toList() to get a typed List<Post>.',
        ],
      },
      {
        heading: 'Demo 8.3: Sending Data via POST',
        content: 'Goal: Send data to an API using HTTP POST with loading, success, and error states.',
        code: `Future<void> createPost(String title, String body) async {\n  final response = await http.post(\n    Uri.parse('https://jsonplaceholder.typicode.com/posts'),\n    headers: {'Content-Type': 'application/json'},\n    body: json.encode({'title': title, 'body': body, 'userId': 1}),\n  );\n  if (response.statusCode == 201) {\n    print('Created: \${response.body}');\n  } else {\n    throw Exception('Failed to create post: \${response.statusCode}');\n  }\n}`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'Common failures',
            list: ['No internet connection', 'Server error (5xx)', 'Invalid JSON', 'Timeout'],
          },
          {
            heading: 'Best Practice',
            list: ['Throw exceptions in service functions', 'Show user-friendly error messages', 'Provide a "Retry" button'],
          },
        ],
      },
      {
        heading: 'Loading & Button States (UX)',
        list: [
          'Disable the submit button while the request is in progress',
          'Show a loading indicator (CircularProgressIndicator)',
          'Prevent double submission',
        ],
      },
      {
        heading: 'Demo 8.4: ApiService (Service Layer Pattern)',
        content: 'Move all HTTP logic into a separate service class to keep UI code clean.',
        code: `class ApiService {\n  static const _base = 'https://jsonplaceholder.typicode.com';\n\n  static Future<List<Post>> fetchPosts() async {\n    final response = await http.get(Uri.parse('\$_base/posts'));\n    if (response.statusCode != 200) {\n      throw Exception('Failed to load posts');\n    }\n    final List<dynamic> data = json.decode(response.body);\n    return data.map((e) => Post.fromJson(e)).toList();\n  }\n\n  static Future<Post> createPost(String title, String body) async {\n    final response = await http.post(\n      Uri.parse('\$_base/posts'),\n      headers: {'Content-Type': 'application/json'},\n      body: json.encode({'title': title, 'body': body, 'userId': 1}),\n    );\n    if (response.statusCode != 201) {\n      throw Exception('Failed to create post');\n    }\n    return Post.fromJson(json.decode(response.body));\n  }\n}`,
        codeLanguage: 'dart',
        subSections: [
          {
            heading: 'Benefits of Service Layer',
            list: ['Separation of concerns', 'Easier to test', 'Better maintainability', 'Single source of truth for API calls'],
          },
        ],
      },
      {
        heading: 'Common Pitfalls & Best Practices',
        subSections: [
          {
            heading: 'Pitfalls to avoid',
            list: [
              'Calling APIs directly inside build()',
              'Not handling errors → app crashes',
              'Hardcoding URLs everywhere',
              'Blocking the UI thread with heavy JSON parsing',
            ],
          },
          {
            heading: 'Best Practices',
            list: [
              'Call APIs in initState() or using a service',
              'Centralize base URL and endpoints',
              'Wrap networking logic in service classes',
              'Always handle loading, empty, and error states',
              'Log responses during development',
            ],
          },
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned how to:',
        list: [
          'Understand RESTful APIs and HTTP methods',
          'Send GET and POST requests using the http package',
          'Decode JSON and convert it into typed Dart model classes',
          'Display API data with FutureBuilder and ListView',
          'Handle loading, empty, and error states properly',
          'Organize networking code using a clean Service Layer pattern',
        ],
        highlights: ['You are now ready to connect your Flutter app to real backend services.'],
      },
    ],
  },
  {
    id: 9,
    title: 'Local Storage & Persistence',
    icon: '💾',
    desc: 'Lưu trữ dữ liệu cục bộ với SharedPreferences và SQLite.',
    contents: [
      'Why Local Storage?',
      'Types of Local Storage (SharedPreferences, JSON File, SQLite)',
      'SharedPreferences — key-value storage',
      'File Storage with dart:io and path_provider',
      'SQLite with SQFlite — CRUD operations',
      'Offline-First strategy',
      'Lab: Offline-First Mini App',
    ],
    sections: [
      {
        heading: 'Why Local Storage?',
        content: 'Local storage is data saved directly on the user\'s device.',
        subSections: [
          {
            heading: 'Key Benefits',
            list: ['Available offline', 'Persistent across app restarts', 'Faster than network API calls', 'Stores personalized user choices'],
          },
          {
            heading: 'Common Examples',
            list: ['Dark / Light mode preference', 'Recently viewed items', 'Saved filters', 'Favorites / watchlist', 'Onboarding flag ("first-time user?")'],
          },
        ],
        highlights: ['Key Idea: Good local storage = better UX + higher app reliability.'],
      },
      {
        heading: 'Types of Local Storage in Flutter',
        table: {
          headers: ['Storage Type', 'Best Use Case', 'Example'],
          rows: [
            ['SharedPreferences', 'Simple key–value data', 'Settings, flags, theme mode'],
            ['JSON File (dart:io)', 'Simple structured lists or documents', 'Notes, history, cached data'],
            ['SQLite (sqflite)', 'Structured, relational, complex data', 'Todo app, inventory, bookmarks'],
          ],
        },
      },
      {
        heading: 'What is SharedPreferences?',
        list: [
          'Lightweight and easy to use',
          'Stores simple key–value pairs',
          'Persistent across app restarts',
          'Supports both synchronous and asynchronous operations',
          'Not suitable for complex objects or large data',
        ],
        subSections: [
          {
            heading: 'Common Use Cases',
            list: ['Dark/Light theme preference', '"Onboarding completed" flag', 'User login state', 'Default filter or sort mode'],
          },
        ],
      },
      {
        heading: 'SharedPreferences Workflow',
        list: [
          '1. Load SharedPreferences instance',
          '2. Read stored values',
          '3. Update values when user interacts',
          '4. Save the new key–value pairs',
          '5. Refresh UI to reflect changes',
        ],
        code: `final prefs = await SharedPreferences.getInstance();\n\n// Read\nfinal isDark = prefs.getBool('dark_mode') ?? false;\n\n// Write\nawait prefs.setBool('dark_mode', true);\n\n// Delete\nawait prefs.remove('dark_mode');`,
        codeLanguage: 'dart',
      },
      {
        heading: 'SharedPreferences Support Across Environments',
        table: {
          headers: ['Environment', 'SharedPreferences Support', 'Notes'],
          rows: [
            ['Flutter App (Android/iOS)', 'Yes', 'Saves to device persistent storage'],
            ['Flutter Web', 'Yes (via localStorage)', 'Automatically maps to browser localStorage'],
            ['DartPad (Flutter mode)', 'No', 'Must use FakePrefs mock class'],
            ['DartPad (Dart mode)', 'No', 'No plugins supported'],
          ],
        },
        highlights: ['DartPad Version: Use a FakePrefs mock class (in-memory only). Data will reset on reload.'],
      },
      {
        heading: 'Why Use Local Files? (File Storage Basics)',
        content: 'Use files when:',
        list: [
          'Data is bigger than key-value storage',
          'Data has structure but doesn\'t require SQL',
          'You want simple offline documents',
          'You want to export/import JSON',
          'You want to cache API responses locally',
        ],
        subSections: [
          {
            heading: 'Key Packages',
            list: ['path_provider → Find app directories', 'dart:io → Read/write files', 'json.encode / json.decode'],
          },
        ],
        code: `import 'dart:io';\nimport 'dart:convert';\nimport 'package:path_provider/path_provider.dart';\n\nFuture<File> _getFile() async {\n  final dir = await getApplicationDocumentsDirectory();\n  return File('\${dir.path}/notes.json');\n}\n\nFuture<void> saveNotes(List notes) async {\n  final file = await _getFile();\n  await file.writeAsString(json.encode(notes));\n}\n\nFuture<List> loadNotes() async {\n  try {\n    final file = await _getFile();\n    final content = await file.readAsString();\n    return json.decode(content);\n  } catch (_) {\n    return [];\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Why SQLite?',
        content: 'Use SQLite when your app needs:',
        list: [
          'Structured data (rows and columns)',
          'Fast read/write operations',
          'Sorting & filtering (ORDER BY, WHERE)',
          'Data relationships',
          'Long-term reliable storage',
          'Strong offline capability',
        ],
        subSections: [
          {
            heading: 'Real Use Cases',
            list: ['Todo / Notes app', 'Offline shopping cart', 'Local user profile', 'Bookmarks / favorites'],
          },
        ],
      },
      {
        heading: 'SQFlite vs SQLite',
        list: [
          'SQLite = The actual lightweight relational database engine',
          'SQFlite = Flutter plugin (wrapper) built on top of SQLite',
        ],
        highlights: [
          'SQFlite is the bridge between Dart and native SQLite.',
          'SQFlite does NOT work on Flutter Web.',
        ],
      },
      {
        heading: 'SQFlite Basics — CRUD + Setup',
        content: 'Key operations:',
        list: [
          'openDatabase() – Open or create database',
          'onCreate – Create tables (CREATE TABLE)',
          'insert() – Add a row',
          'query() – Read rows',
          'update() – Modify rows',
          'delete() – Remove rows',
        ],
        code: `final db = await openDatabase(\n  'todo.db',\n  version: 1,\n  onCreate: (db, version) async {\n    await db.execute(\n      'CREATE TABLE todos (id INTEGER PRIMARY KEY, title TEXT, done INTEGER)',\n    );\n  },\n);\n\n// Insert\nawait db.insert('todos', {'title': 'Buy milk', 'done': 0});\n\n// Query\nfinal todos = await db.query('todos', orderBy: 'id DESC');\n\n// Update\nawait db.update('todos', {'done': 1}, where: 'id = ?', whereArgs: [1]);\n\n// Delete\nawait db.delete('todos', where: 'id = ?', whereArgs: [1]);`,
        codeLanguage: 'dart',
        highlights: ['Best Practice: Open the database only once and reuse it (use a singleton or service class).'],
      },
      {
        heading: 'SQL SELECT Recap (for SQFlite)',
        code: `SELECT columns FROM table\nWHERE condition\nORDER BY column\nLIMIT number;`,
        codeLanguage: 'sql',
      },
      {
        heading: 'Offline-First Concept',
        content: 'Offline-First means the app still works properly when there is no internet.',
        list: [
          'Load data from local storage first',
          'Sync with server when online',
          'Provide smooth experience even without network',
        ],
        highlights: ['Strategy: Store offline → Use offline → Sync when online → Resolve conflicts'],
      },
      {
        heading: 'When to Use Which Storage?',
        table: {
          headers: ['Use Case', 'Recommended Storage'],
          rows: [
            ['Theme, flags, small settings', 'SharedPreferences'],
            ['Simple notes, lists, cache', 'Local JSON File'],
            ['Large structured data, relations', 'SQLite (SQFlite)'],
            ['Offline-first + sync with server', 'SQLite + Backend'],
          ],
        },
      },
      {
        heading: 'Lab 9: Offline-First Mini App',
        content: 'Build an Offline-First Multi-Storage App that combines all three storage methods.',
        subSections: [
          {
            heading: 'Features',
            list: [
              'SharedPreferences — theme settings (dark/light)',
              'Local JSON file — notes (read/write)',
              'SQLite — tasks/todos (full CRUD)',
            ],
          },
          {
            heading: 'You will practice',
            list: [
              'Saving and loading theme preference',
              'Reading/writing JSON notes',
              'Performing full CRUD with SQLite',
              'Refreshing UI after local storage changes',
            ],
          },
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned the three main local storage methods in Flutter:',
        list: [
          'SharedPreferences: Best for simple key-value data (theme, flags)',
          'JSON Files: Good for document-style data (notes, cache)',
          'SQLite (SQFlite): Ideal for structured, relational, and complex data',
        ],
        highlights: ['You also understood the Offline-First concept and how to combine multiple storage methods in a real mini-app.'],
      },
    ],
  },
  {
    id: 10,
    title: 'Authentication, Session Management & Notifications',
    icon: '🔐',
    desc: 'Đăng nhập, quản lý phiên và push notification.',
    contents: [
      'Backend authentication & Token-based login (JWT)',
      'Sessions & secure token storage',
      'Login + Signup flow',
      'Auto-login & logout',
      'Protected routes',
      'Introduction to Firebase Auth',
      'Local Notifications after authentication',
    ],
    sections: [
      {
        heading: 'What is Authentication?',
        content: 'Authentication = verifying who the user is.',
        subSections: [
          { heading: 'Used to', list: ['Protect user accounts', 'Allow personalized features', 'Control access to private data'] },
          { heading: 'Authentication vs Authorization', list: ['Authentication → Who are you?', 'Authorization → What are you allowed to do?'] },
        ],
        highlights: ['Real-world examples: Shopee, GrabFood, Tiki — order history, payment info, and profile all require login.'],
      },
      {
        heading: 'Authentication Flow (High-Level)',
        list: [
          '1. User enters credentials (email/password)',
          '2. App sends API request to backend',
          '3. Backend verifies credentials',
          '4. Backend returns a token (usually JWT)',
          '5. App stores the token locally',
          '6. App attaches the token to every subsequent API request',
          '7. Session is maintained until logout or token expires',
        ],
      },
      {
        heading: 'Token-Based Authentication',
        content: 'A token is a short-lived digital credential generated by the server to prove a user\'s identity.',
        subSections: [
          {
            heading: 'Benefits',
            list: ['Stateless', 'Secure', 'Works across mobile and web', 'Fast'],
          },
          {
            heading: 'Types of Tokens',
            list: ['Access Token (short-lived)', 'Refresh Token (longer-lived, used to get new access token)'],
          },
        ],
        highlights: [
          'Token ≠ Password. The app does not need to understand the token — it only needs to store it and send it in the Authorization header.',
          'Token Flow: Login → Server verifies → Returns Access Token + Refresh Token → App stores tokens → Sends Access Token in every request → When expired → Use Refresh Token to get new one.',
        ],
      },
      {
        heading: 'JWT (JSON Web Token) Explained',
        content: 'A JWT consists of three parts:',
        list: [
          'Header: Algorithm and token type',
          'Payload: User data (user ID, email, role, expiry time…)',
          'Signature: Used to verify the token',
        ],
        subSections: [
          {
            heading: 'Properties',
            list: ['Base64 encoded', 'Signed (not encrypted)', 'Contains expiry time (exp)'],
          },
        ],
        highlights: ['JWTs must NOT store passwords — only identity claims.'],
      },
      {
        heading: 'Login Screen UI Structure',
        list: [
          'Email TextFormField',
          'Password TextFormField',
          'Login Button',
          '"Forgot Password?" link',
          'Link to Signup screen',
        ],
        subSections: [
          {
            heading: 'Good Practices',
            list: ['Inline field validation', 'Disable button while loading', 'Show/hide password toggle'],
          },
        ],
      },
      {
        heading: 'Demo 10.1 — Backend Login Flow',
        content: 'Build a login screen with email and password, validate inputs, simulate backend authentication, receive and store a mock token, then navigate to a protected screen.',
        subSections: [
          {
            heading: 'Steps',
            list: ['1. Build UI', '2. Simulate backend request', '3. Handle mock response', '4. Navigate to protected screen'],
          },
          {
            heading: 'Mock Backend (AuthService)',
            list: ['Adds a 2-second delay to simulate network latency', 'Checks demo credentials', 'Returns a mock JWT token when valid'],
          },
        ],
        code: `Future<String?> login(String email, String password) async {\n  await Future.delayed(const Duration(seconds: 2));\n  if (email == 'demo@test.com' && password == 'password123') {\n    return 'mock.jwt.token';\n  }\n  return null; // Invalid credentials\n}`,
        codeLanguage: 'dart',
        highlights: [
          'If valid → Save token and navigate to Home.',
          'If invalid → Show error Snackbar.',
        ],
      },
      {
        heading: 'Mock API vs Real API',
        table: {
          headers: ['Feature', 'Mock API', 'Real API'],
          rows: [
            ['Internet required', 'No', 'Yes'],
            ['Error-free', 'Always', 'May fail'],
            ['Works on all devices', 'Yes', 'Not always'],
            ['Predictability', 'High', 'Medium'],
            ['Good for teaching', 'Yes', 'Yes'],
            ['Good for real projects', 'No', 'Yes'],
          ],
        },
        highlights: ['Always start with the Mock version so every student can see successful login. Introduce the Real API version later.'],
      },
      {
        heading: 'Signup Flow Overview',
        content: 'Extend the login flow by adding a Signup screen.',
        list: [
          'User taps "Create account" on Login screen',
          'Navigate to SignupScreen',
          'User fills: name, email, password, confirm password',
          'Form validates input',
          'App calls AuthService.signup()',
          'On success → Show success message and return to Login',
          'On failure → Show appropriate error',
        ],
        subSections: [
          {
            heading: 'Password Validation Rules',
            list: [
              'Minimum 6–8 characters',
              'At least 1 uppercase letter',
              'At least 1 number',
              'No leading/trailing whitespace',
              'Password and Confirm Password must match',
            ],
          },
        ],
      },
      {
        heading: 'Understanding User Session',
        content: 'A session represents the authenticated state of a user. It typically includes: Access token, User profile, Token expiry timestamp.',
        subSections: [
          {
            heading: 'How a session starts',
            list: ['User logs in', 'App receives and stores token'],
          },
          {
            heading: 'How a session ends',
            list: ['User logs out', 'Token expires', 'Server forces logout (401 Unauthorized)'],
          },
        ],
      },
      {
        heading: 'Persisting Session with SharedPreferences',
        content: 'Why store the token locally?',
        list: [
          'Keep user logged in after app restart',
          'Enable auto-login',
          'Faster app startup',
        ],
        highlights: [
          'If token exists → User is authenticated.',
          'If missing or expired → Show Login screen.',
        ],
      },
      {
        heading: 'Auto Login Flow',
        content: 'Splash → Login/Home flow:',
        list: [
          '1. Start SplashScreen',
          '2. Check token from SharedPreferences',
          '3. If token exists → Go to Home',
          '4. If no token → Go to Login',
        ],
        code: `Future<void> checkSession() async {\n  final prefs = await SharedPreferences.getInstance();\n  final token = prefs.getString('auth_token');\n  if (token != null) {\n    Navigator.pushReplacementNamed(context, '/home');\n  } else {\n    Navigator.pushReplacementNamed(context, '/login');\n  }\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'What is Firebase Authentication?',
        content: 'Firebase Authentication is a cloud-based identity platform that provides secure and scalable login.',
        list: [
          'Google, Apple, Facebook, Email/Password sign-in',
          'Automatic session persistence',
          'Built-in token refresh',
        ],
        highlights: [
          'Easier than building your own backend.',
          'Industry standard for mobile apps.',
        ],
      },
      {
        heading: 'Google Sign-In Authentication Flow',
        list: [
          '1. User taps "Sign in with Google"',
          '2. Google account chooser appears',
          '3. Google issues OAuth tokens',
          '4. Convert to Firebase credential',
          '5. Firebase signs in the user',
          '6. App receives FirebaseUser object',
          '7. Navigate to Home',
        ],
        subSections: [
          {
            heading: 'Required Configurations',
            list: [
              'Create Firebase Project',
              'Add Android app with correct package name',
              'Add SHA-1 and SHA-256 fingerprints',
              'Download google-services.json',
              'Add dependencies: firebase_core, firebase_auth, google_sign_in',
              'Enable Google Sign-In in Firebase Console',
            ],
          },
        ],
      },
      {
        heading: 'Common Errors & Fixes (Google Sign-In)',
        table: {
          headers: ['Error', 'Cause', 'Fix'],
          rows: [
            ['Google Sign-In screen not appear', 'Missing SHA-1', 'Add SHA-1 and rebuild'],
            ['DEVELOPER_ERROR', 'Wrong package name', 'Match package name in Firebase'],
            ['Firebase initialization error', 'Missing google-services.json', 'Place file in android/app/'],
            ['App crashes at launch', 'Missing Gradle plugin', 'Add google-services plugin'],
          ],
        },
      },
      {
        heading: 'Local vs Push Notifications',
        content: 'A notification is a system-level message displayed outside the app UI.',
        table: {
          headers: ['Type', 'Triggered by', 'Internet Required', 'Backend Needed'],
          rows: [
            ['Local Notification', 'The app itself', 'No', 'No'],
            ['Push Notification', 'Server', 'Yes', 'Yes'],
          ],
        },
        highlights: ['Focus in this module: Local Notifications.'],
      },
      {
        heading: 'Demo 10.5: Local Notification Flow',
        content: 'Integrate local notifications and trigger a notification after successful login.',
        list: [
          'Integrate flutter_local_notifications package',
          'Trigger a notification after successful login',
          'Keep notification logic separate from authentication logic',
        ],
        highlights: [
          'Example notification: "Login successful. Welcome back!"',
          'Also used for: Account activity alerts, Password reset confirmation.',
        ],
      },
      {
        heading: 'Best Practices & Patterns',
        subSections: [
          {
            heading: 'Security',
            list: [
              'Hash & salt passwords (server-side)',
              'Never store raw passwords',
              'Always use HTTPS',
              'Store tokens securely (not in SharedPreferences for production)',
            ],
          },
          {
            heading: 'User Experience',
            list: ['Clear and friendly error messages', 'Show loading indicators during network calls', 'Support auto-login'],
          },
          {
            heading: 'Architecture',
            list: [
              'Use AuthService as a singleton',
              'Standard flow: Splash → Login → Home',
              'Use pushReplacementNamed() to prevent going back to Login',
            ],
          },
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned:',
        list: [
          'Core concepts of authentication, authorization, sessions, and JWT tokens',
          'How to design and validate login/signup forms',
          'Token-based authentication with mock and real APIs',
          'Session persistence and auto-login using SharedPreferences',
          'Firebase Authentication and Google Sign-In',
          'Local notifications to enhance user experience after authentication',
        ],
      },
    ],
  },
  {
    id: 11,
    title: 'Testing & Debugging in Flutter',
    icon: '🧪',
    desc: 'Unit test, widget test, debug và tối ưu lỗi.',
    contents: [
      'Why Testing & Debugging Matter',
      'Types of Tests (Unit, Widget, Integration)',
      'The Flutter Testing Pyramid',
      'Testing Workflow',
      'Demo 11.1 – Unit Test: Task Model',
      'Demo 11.2 – Widget Test: Add Task Updates UI',
      'Demo 11.3 – Navigation Test',
      'Demo 11.4 – Integration Test: Full CRUD Flow',
      'Best Practices & Summary',
    ],
    sections: [
      {
        heading: 'Why Testing & Debugging Matter',
        content: 'Users expect smooth 60–120 FPS experiences. Poor code quality leads to real problems:',
        list: [
          'Poor rebuild patterns increase CPU load',
          'Large assets slow startup times',
          'Inefficient list rendering affects scrolling',
          'App size impacts downloads and Play Store acceptance',
        ],
        highlights: [
          'UI Overflow Error — occurs when a widget exceeds its layout constraints. These issues do not crash the app, so tests and DevTools are needed to detect them.',
        ],
      },
      {
        heading: 'Types of Tests in Flutter',
        table: {
          headers: ['Test Type', 'Purpose', 'Scope'],
          rows: [
            ['Unit Tests', 'Validate pure logic without UI', 'Small, fast'],
            ['Widget Tests', 'Validate UI rendering and user interactions', 'Medium'],
            ['Integration Tests', 'Validate full user flows from start to finish', 'Large, slower'],
          ],
        },
      },
      {
        heading: 'The Flutter Testing Pyramid',
        list: [
          'Unit Tests → Many (fast, stable, cheap). Catch logic bugs early.',
          'Widget Tests → Moderate. Validate UI behavior.',
          'Integration Tests → Few. Use only for critical user flows.',
        ],
        highlights: ['Most UI issues start from logic → unit tests catch problems early. Layout & interaction problems → widget tests. Multi-screen bugs → integration tests.'],
      },
      {
        heading: 'Flutter Testing Workflow',
        list: [
          '1. Define the expected behavior',
          '2. Prepare the test environment',
          '3. Execute logic or render the widget',
          '4. Simulate user interactions',
          '5. Use expect() to verify the results',
        ],
      },
      {
        heading: 'How Tests Map to Real Flutter Problems',
        table: {
          headers: ['Flutter Issue', 'Recommended Test', 'Why'],
          rows: [
            ['Logic failure', 'Unit Test', 'Fast + stable'],
            ['UI not updating', 'Widget Test', 'Validates rebuild'],
            ['Wrong navigation', 'Navigation Test', 'Checks route + data'],
            ['Entire feature broken', 'Integration Test', 'Simulates real use'],
          ],
        },
      },
      {
        heading: 'Introducing the Taskly Demo App',
        content: 'We use Taskly, a simple Todo App, to demonstrate each test type.',
        subSections: [
          {
            heading: 'Features',
            list: ['Task List screen', 'Task Detail screen', 'Add, delete, toggle tasks', 'Edit and save tasks'],
          },
          {
            heading: 'App Structure',
            list: [
              'TasklyApp — application entry point',
              'Provider (TaskProvider) — manages app-wide state',
              'TaskRepository — handles CRUD logic for tasks',
              'TaskListScreen — primary UI used in testing',
            ],
          },
        ],
        highlights: ['State flow: UI → Provider → Repository. This structure supports unit, widget, navigation, and integration testing.'],
      },
      {
        heading: 'Demo 11.1 – Unit Test: Task Model',
        content: 'File: test/unit/demo_11_1_task_model_test.dart',
        subSections: [
          {
            heading: 'What we test',
            list: ['Toggle completion', 'Update model state', 'Ensure logic stays predictable'],
          },
          {
            heading: 'Expected Output',
            list: ['Initial: completed = false', 'After toggle(): completed = true'],
          },
        ],
        code: `test('toggle task completion', () {\n  final task = Task(id: '1', title: 'Buy milk', completed: false);\n  final toggled = task.toggle();\n  expect(toggled.completed, true);\n});`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Demo 11.2 – Widget Test: Add Task Updates UI',
        content: 'File: test/widget/demo_11_2_task_list_add_test.dart',
        subSections: [
          {
            heading: 'What we test',
            list: ['Enter text', 'Tap "Add"', 'List updates with the newly added task'],
          },
          {
            heading: 'Expected Output',
            list: ['Before: "No tasks yet. Add one!"', 'After: "Buy milk"'],
          },
          {
            heading: 'What this proves',
            list: ['UI rebuilds correctly', 'Provider state updates', 'ListView reacts to new data'],
          },
        ],
        code: `testWidgets('add task updates list', (tester) async {\n  await tester.pumpWidget(TasklyApp());\n  await tester.enterText(find.byType(TextField), 'Buy milk');\n  await tester.tap(find.text('Add'));\n  await tester.pump();\n  expect(find.text('Buy milk'), findsOneWidget);\n});`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Demo 11.3 – Navigation Test: List → Detail',
        subSections: [
          {
            heading: 'What we test',
            list: [
              'Click on an item in the list',
              'Navigate to the detail screen',
              'Data is passed correctly to the detail screen',
            ],
          },
          {
            heading: 'Expected Output',
            list: ['New screen shows "Task Details"', 'Detail form is loaded with task data'],
          },
        ],
        highlights: ['Navigation errors are common. This test ensures routes and widget tree behave correctly.'],
        code: `testWidgets('tap task navigates to detail', (tester) async {\n  await tester.pumpWidget(TasklyApp());\n  await tester.tap(find.text('Buy milk'));\n  await tester.pumpAndSettle();\n  expect(find.text('Task Details'), findsOneWidget);\n});`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Demo 11.4 – Integration Test: Full CRUD Flow',
        subSections: [
          {
            heading: 'What we test',
            list: [
              'Add a task',
              'Open detail screen',
              'Edit title',
              'Save changes',
              'Confirm the updated title appears in the list',
            ],
          },
          {
            heading: 'Expected Output',
            list: ['Old title disappears', 'New title is displayed'],
          },
        ],
        highlights: [
          'Integration tests validate the entire user journey.',
          'Ensure all layers (UI → Provider → Repository) interact correctly.',
        ],
      },
      {
        heading: 'Best Practices',
        list: [
          'Keep tests small and focused',
          'Use keys for widget tests',
          'Mock repositories when possible',
          'Avoid testing Flutter framework functionality',
          'Don\'t overuse integration tests (they are slow and expensive)',
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned how to:',
        list: [
          'Identify common UI and state-related issues in Flutter apps',
          'Apply the Flutter testing pyramid (Unit → Widget → Integration)',
          'Write unit tests to verify logic and model behavior',
          'Write widget tests to validate UI rendering and interactions',
          'Write integration tests to confirm full user flows',
          'Use DevTools to diagnose layout, rebuild, and navigation issues',
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'Performance Optimization & App Deployment',
    icon: '🏆',
    desc: 'Tối ưu hiệu năng và deploy app lên store.',
    contents: [
      'Why Performance Matters (FPS, render pipeline)',
      'Common performance bottlenecks',
      'Flutter DevTools overview',
      'Optimization techniques (const, widget extraction, Selector, Keys)',
      'Image optimization',
      'App size analysis',
      'Building Release APK / AppBundle',
      'Deployment checklist',
    ],
    sections: [
      {
        heading: 'Why Performance Matters in Flutter',
        content: 'Performance directly affects frame rendering, user experience, device constraints, and real-world publishing.',
        table: {
          headers: ['Target', 'Frame Budget'],
          rows: [
            ['60 FPS (standard)', '16.6 ms per frame'],
            ['120 FPS (new devices)', '8 ms per frame'],
          ],
        },
        highlights: [
          'FPS (Frames Per Second) = number of frames drawn per second. Higher FPS = smoother experience.',
          'Flutter must complete each frame (build → layout → paint) within the allowed time. If any step exceeds the limit, frames are dropped.',
          'Stutters, jank, and slow scrolling make the app feel cheap. Poorly optimized lists are the biggest cause of lag in student apps.',
        ],
      },
      {
        heading: 'How Flutter Builds the UI (Render Pipeline)',
        list: [
          'Widgets — immutable blueprints',
          'Elements — manage lifecycle and state',
          'RenderObjects — perform layout, painting, and compositing',
        ],
        highlights: ['Performance Principle: Avoid unnecessary work in build(), and reduce rebuilds as much as possible.'],
      },
      {
        heading: 'What Causes Performance Problems?',
        subSections: [
          {
            heading: 'Common Issues',
            list: [
              'Too many widget rebuilds',
              'Heavy logic running inside build()',
              'Loading large images at full resolution',
              'Overly deep widget trees',
              'Incorrect use of setState() or Provider listeners',
              'Inefficient list rendering (ListView with many items)',
              'Expensive synchronous operations on the UI thread',
              'Overuse of GlobalKey',
            ],
          },
          {
            heading: 'Typical problems in student apps',
            list: [
              'Entire screen rebuilds when only one item changes',
              'Constant rebuild of large widget trees',
              'Loading full-resolution images from the network',
            ],
          },
        ],
      },
      {
        heading: 'Flutter DevTools Overview',
        table: {
          headers: ['Tool', 'Purpose'],
          rows: [
            ['Performance', 'FPS timeline, frame rendering cost'],
            ['CPU Profiler', 'Identify execution hotspots'],
            ['Memory', 'Detect leaks and allocations'],
            ['Widget Inspector', 'Identify rebuild sources'],
            ['Repaint Rainbow', 'Highlight repaint boundaries'],
            ['Rebuild Tracker', 'Count widget rebuilds'],
          ],
        },
        highlights: [
          'Always run in Profile Mode for accurate measurements.',
          'Never measure performance in Debug mode — it adds significant overhead.',
        ],
      },
      {
        heading: 'Optimization Technique 1: Use const Effectively',
        content: 'const reduces rebuilds, saves memory, and helps Flutter\'s diffing algorithm.',
        code: `// Bad — rebuilds every time\nText("Task Title")\n\n// Good — never rebuilds\nconst Text("Task Title")`,
        codeLanguage: 'dart',
        highlights: ['Use const for any widget whose properties never change at runtime.'],
      },
      {
        heading: 'Optimization Technique 2: Extract Widgets',
        content: 'Large widgets that rebuild unnecessarily cause lag. Extract reusable parts into separate widget classes.',
        list: [
          'Only the extracted widget rebuilds when its data changes',
          'Parent widget remains stable',
          'Cleaner and more maintainable code',
        ],
        highlights: ['Example: Extract TaskTile as a separate widget instead of building ListTile inline.'],
      },
      {
        heading: 'Optimization Technique 3: Avoid Heavy Work in build()',
        content: 'Never do this inside build():',
        list: ['Sorting lists', 'Parsing JSON', 'Complex calculations', 'Database reads', 'API calls'],
        code: `// Anti-pattern — Wrong!\nWidget build(BuildContext context) {\n  final sorted = tasks..sort(); // Runs on every rebuild!\n}\n\n// Correct — perform heavy work once\nvoid initState() {\n  super.initState();\n  _sortedTasks = List.from(tasks)..sort();\n}`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Optimization Technique 4: Using Keys Properly',
        content: 'Keys help Flutter identify widgets across rebuilds.',
        subSections: [
          {
            heading: 'When to use keys',
            list: ['Preserving state across rebuilds', 'Animations', 'Reordering lists', 'Improving diffing performance'],
          },
          {
            heading: 'Warnings',
            list: [
              'Avoid GlobalKey unless absolutely necessary — it is powerful but expensive',
              'UniqueKey() forces rebuilds every time — avoid in lists',
            ],
          },
        ],
        highlights: ['Good practice: Use ValueKey(task.id) for list items.'],
      },
      {
        heading: 'Demo 12.1 – Optimize List & UI Rebuilds',
        content: 'Problem: Entire TaskListScreen rebuilds whenever tasks change because context.watch<TaskProvider>() is at the top level.',
        subSections: [
          {
            heading: 'Solution',
            list: [
              'Extract TaskTile as a separate widget',
              'Use Selector to rebuild only the list',
              'Make static UI independent of task list',
              'Add const where possible',
            ],
          },
          {
            heading: 'Performance Result',
            list: [
              'Before: Entire screen rebuilds on every change',
              'After: Only the affected TaskTile rebuilds → smoother scrolling and better architecture',
            ],
          },
        ],
      },
      {
        heading: 'Demo 12.2 – Image Optimization',
        content: 'Large/uncompressed images hurt performance. Apply these techniques:',
        list: [
          '1. Resize images before use (width, height parameters)',
          '2. Pre-cache frequently used images (precacheImage)',
          '3. Use FadeInImage for remote images (shows placeholder while loading)',
          '4. Avoid decoding images inside build()',
        ],
        code: `// Pre-cache\nawait precacheImage(NetworkImage(url), context);\n\n// FadeInImage with placeholder\nFadeInImage.assetNetwork(\n  placeholder: 'assets/placeholder.png',\n  image: imageUrl,\n  width: 100,\n  height: 100,\n  fit: BoxFit.cover,\n)`,
        codeLanguage: 'dart',
      },
      {
        heading: 'Demo 12.3 – App Size Analysis',
        content: 'Generate a size analysis report to identify unnecessary dependencies or large assets.',
        code: `# Analyze APK size\nflutter build apk --analyze-size\n\n# Output includes HTML treemap and JSON report`,
        codeLanguage: 'bash',
        subSections: [
          {
            heading: 'Common Tips to Reduce Size',
            list: [
              'Remove unused assets',
              'Compress large images',
              'Delete unused dependencies',
              'Enable icon tree-shaking',
            ],
          },
        ],
      },
      {
        heading: 'Demo 12.4: Building & Deploying the Release App',
        subSections: [
          {
            heading: 'Build Modes',
            list: [
              'Debug — development, slow, with debugging overhead',
              'Profile — near-release performance, no debugging overhead',
              'Release — fully optimized, for distribution',
            ],
          },
        ],
        code: `# Run in Profile Mode (near-release performance)\nflutter run --profile\n\n# Build Release APK\nflutter build apk --release\n# Output: build/app/outputs/flutter-apk/app-release.apk\n\n# Build AppBundle (for Google Play)\nflutter build appbundle --release`,
        codeLanguage: 'bash',
        highlights: [
          'Update versionCode and versionName in build.gradle before release.',
          'AppBundle is preferred for Google Play — it enables smaller downloads via Dynamic Delivery.',
        ],
      },
      {
        heading: 'Deployment Checklist',
        list: [
          'Remove debug statements',
          'Check app icons and splash screen',
          'Clean unused assets',
          'Update versionCode',
          'Test in Profile mode',
          'Test release APK on physical device',
          'Review size report (--analyze-size)',
          'Scan for crashes',
        ],
      },
      {
        heading: 'Best Practices Summary',
        subSections: [
          {
            heading: 'Rendering',
            list: ['Use const wherever possible', 'Extract widgets', 'Avoid heavy work in build()'],
          },
          {
            heading: 'State & Rebuilds',
            list: ['Use Selector for fine-grained updates', 'Keep state close to where it is used'],
          },
          {
            heading: 'Lists',
            list: ['Always use ListView.builder', 'Extract list items', 'Use stable keys (ValueKey)'],
          },
          {
            heading: 'Images',
            list: ['Resize and compress', 'Pre-cache', 'Avoid decoding in build()'],
          },
          {
            heading: 'App Size',
            list: ['Remove unused assets and dependencies', 'Enable icon tree-shaking'],
          },
          {
            heading: 'DevTools & Deployment',
            list: ['Always test in Profile mode', 'Fix jank and rebuild hotspots before release'],
          },
        ],
      },
      {
        heading: 'Summary',
        content: 'In this module, you learned to:',
        list: [
          'Understand Flutter\'s rendering pipeline and common performance bottlenecks',
          'Identify issues such as unnecessary rebuilds, heavy image decoding, and inefficient lists',
          'Use DevTools for profiling FPS, memory, rebuilds, and CPU usage',
          'Apply practical optimizations: const, widget extraction, Selector, list tuning',
          'Analyze and reduce app size',
          'Build Release APK/AppBundle and prepare the app for deployment',
        ],
      },
    ],
  },
];
