PLOVR_VERSION=2.0.0
PLOVR=plovr.jar

all: build
plovr: $(PLOVR)
build: build/kt.js
serve:
	java -jar $(PLOVR) serve *.json
build/%.js: %.json
	mkdir -p build
	java -jar $(PLOVR) build $< > $@
$(PLOVR):
	wget -q --no-check-certificate https://registry.npmjs.org/plovr/-/plovr-$(PLOVR_VERSION).tgz
	tar -xOzf plovr-$(PLOVR_VERSION).tgz package/bin/plovr.jar > $(PLOVR)
	rm plovr-$(PLOVR_VERSION).tgz
lint:
	fixjsstyle --strict src/*.js
	gjslint --strict src/*.js
webserver:
	java -jar $(PLOVR) soyweb --dir .
