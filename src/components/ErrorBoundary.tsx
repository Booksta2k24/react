import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: string
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: "" };
    }

    static getDerivedStateFromError(error: Error): State {
        console.log(error);
        return { hasError: true, error: error.message };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    <h1 className="text-6xl font-bold text-secondary mb-4">Oops!</h1>
                    <p className="text-2xl text-gray-600 mb-8">Something went wrong.</p>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <svg
                            className="w-16 h-16 text-secondary mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-gray-700 mb-4">
                            We're sorry, but an unexpected error has occurred: {this.state.error}
                        </p>
                        <button className="bg-secondary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
                            Go Back
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
