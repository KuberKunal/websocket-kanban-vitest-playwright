import '@testing-library/jest-dom';

// Mock for useWebSocket
vi.mock('./client/src/lib/useWebSocket', () => ({
  useWebSocket: () => ({
    socket: null,
    isConnected: false,
    lastMessage: null,
    sendMessage: vi.fn(),
  }),
}));

// Mock for react-query
vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn().mockReturnValue({
    data: [],
    isLoading: false,
  }),
  useMutation: vi.fn().mockReturnValue({
    mutate: vi.fn(),
    isPending: false,
  }),
  QueryClient: vi.fn().mockImplementation(() => ({
    invalidateQueries: vi.fn(),
  })),
}));

// Mock for React DnD
vi.mock('react-dnd', () => ({
  useDrag: () => [{ isDragging: false }, vi.fn()],
  useDrop: () => [{ isOver: false }, vi.fn()],
  DndProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock for recharts
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  BarChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Bar: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  PieChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Pie: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Cell: () => <div></div>,
  XAxis: () => <div></div>,
  YAxis: () => <div></div>,
  Tooltip: () => <div></div>,
  Legend: () => <div></div>,
}));