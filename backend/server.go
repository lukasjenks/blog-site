package main

import (
	   "net/http"
	   "os"
	   "time"
	   "log"
	   "github.com/gorilla/handlers"
	   "github.com/gorilla/mux"
)

func handleIndex(entryPoint string) func(w http.ResponseWriter, r * http.Request) {
	 function := func(w http.ResponseWriter, r *http.Request) {
	 		  http.ServeFile(w, r, entryPoint)
	}
	return http.HandlerFunc(function)
}

func main() {

	 // Define fsPaths for serving front-end and front-end assets
	 entry := "/home/debian/blog-site/frontend/build/index.html"
	 static := "/home/debian/blog-site/frontend/build/static"

	 // Init main gorilla/mux router
	 r := mux.NewRouter()

	 // TODO: Add API Router Here:
	 // API router uses alt path prefix as to not conflict with front-end routing
	 // apiSubRouter := r.PathPrefix("/api/v1").Subrouter()

	 // Serve static assets
	 r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir(static))))

	 // Serve JS application entry point for anything that is not to be handled by API/static
	 r.PathPrefix("/").HandlerFunc(handleIndex(entry))

	 server := &http.Server {
	 		Handler: handlers.LoggingHandler(os.Stdout, r),
			Addr:	 "127.0.0.1:3000",
			// Enforce timeout
			WriteTimeout: 15 * time.Second,
			ReadTimeout: 15 * time.Second,
	}
	log.Fatal(server.ListenAndServe())
}