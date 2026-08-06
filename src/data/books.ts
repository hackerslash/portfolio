export interface Book {
  title: string
  author: string
  category: string
  /** Percent read, 0–100. */
  progress: number
  /** Cover path under /public. */
  cover: string
}

export const books: Book[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Systems",
    progress: 100,
    cover: "/books/ddia.jpg",
  },
  {
    title: "Database Internals",
    author: "Alex Petrov",
    category: "Systems",
    progress: 70,
    cover: "/books/database-internals.jpg",
  },
  {
    title: "The Rust Programming Language",
    author: "Klabnik & Nichols",
    category: "Languages",
    progress: 55,
    cover: "/books/rust-book.jpg",
  },
  {
    title: "Designing Distributed Systems",
    author: "Brendan Burns",
    category: "Infra",
    progress: 40,
    cover: "/books/designing-distributed-systems.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    category: "Craft",
    progress: 100,
    cover: "/books/pragmatic-programmer.jpg",
  },
  {
    title: "Staff Engineer",
    author: "Will Larson",
    category: "Career",
    progress: 25,
    cover: "/books/staff-engineer.jpg",
  },
  {
    title: "Designing Machine Learning Systems",
    author: "Chip Huyen",
    category: "AI/ML",
    progress: 80,
    cover: "/books/dmls.jpg",
  },
  {
    title: "Building Microservices",
    author: "Sam Newman",
    category: "Systems",
    progress: 65,
    cover: "/books/building-microservices.jpg",
  },
  {
    title: "Site Reliability Engineering",
    author: "Google",
    category: "Infra",
    progress: 45,
    cover: "/books/sre.jpg",
  },
  {
    title: "Release It!",
    author: "Michael Nygard",
    category: "Systems",
    progress: 35,
    cover: "/books/release-it.jpg",
  },
  {
    title: "Fundamentals of Software Architecture",
    author: "Richards & Ford",
    category: "Craft",
    progress: 50,
    cover: "/books/fundamentals-architecture.jpg",
  },
  {
    title: "The Go Programming Language",
    author: "Donovan & Kernighan",
    category: "Languages",
    progress: 60,
    cover: "/books/go-book.jpg",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Craft",
    progress: 100,
    cover: "/books/clean-code.jpg",
  },
]
