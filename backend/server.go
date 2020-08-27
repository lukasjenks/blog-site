package main

import (
	"net/http"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
)

func main() {

        // Initialize gorilla/mux router
        router := mux.NewRouter()

        // Handle CORS
        headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
        methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
        origins := handlers.AllowedOrigins([]string{"*"})

        router.PathPrefix("/").Handler(http.FileServer(http.Dir("/home/debian/blog-site/frontend/build")))
		router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("/home/debian/blog-site/frontend/build/static"))))
        http.ListenAndServe(":3000", handlers.CORS(headers, methods, origins)(router))
}
