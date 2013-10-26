#! /usr/bin/env python
# coding=utf-8
import sys
try:
    import BaseHTTPServer
    from SimpleHTTPServer import SimpleHTTPRequestHandler
except ImportError:
    import http.server
    from http.server import SimpleHTTPRequestHandler

HandlerClass = SimpleHTTPRequestHandler
ServerClass  = 'BaseHTTPServer' in locals() and BaseHTTPServer.HTTPServer or http.server.HTTPServer
Protocol     = "HTTP/1.0"

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8000
server_address = ('127.0.0.1', port)

HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)

sa = httpd.socket.getsockname()
print("Serving HTTP on", sa[0], "port", sa[1], "...")
httpd.serve_forever()