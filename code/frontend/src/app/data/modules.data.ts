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
  { id: 7,  title: 'Forms and Validation',                                icon: '📝', desc: 'Tạo form, validate dữ liệu và xử lý input người dùng.' },
  { id: 8,  title: 'Working with RESTful APIs & JSON',                    icon: '🌐', desc: 'Gọi API, parse JSON và hiển thị dữ liệu từ server.' },
  { id: 9,  title: 'Local Storage & Persistence',                         icon: '💾', desc: 'Lưu trữ dữ liệu cục bộ với SharedPreferences và SQLite.' },
  { id: 10, title: 'Authentication, Session Management & Notifications',  icon: '🔐', desc: 'Đăng nhập, quản lý phiên và push notification.' },
  { id: 11, title: 'Testing & Debugging in Flutter',                      icon: '🧪', desc: 'Unit test, widget test, debug và tối ưu lỗi.' },
  { id: 12, title: 'Performance Optimization & App Deployment',           icon: '🏆', desc: 'Tối ưu hiệu năng và deploy app lên store.' },
];
