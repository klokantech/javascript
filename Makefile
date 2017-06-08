PLOVR_VERSION=6.1.1
PLOVR=plovr-$(PLOVR_VERSION).jar

.PHONY: all plovr build serve lint webserver

all: build
build: build/kt.js build/autocomplete.js build/index.html
serve:
	java -jar $(PLOVR) serve *.json
build/%.js: %.json
	mkdir -p build
	java -jar $(PLOVR) build $< > $@
.PHONY: plovr
plovr: $(PLOVR)
$(PLOVR):
	wget -q --no-check-certificate -O $(PLOVR) https://github.com/bolinfest/plovr/releases/download/v$(PLOVR_VERSION)/plovr.jar
build/%.html: demo/%.html
	cp $< $@
	sed -i 's#http://localhost:9810/compile?id=kt-debug#kt.js#g' $@
lint:
	fixjsstyle --strict -r src
	gjslint --strict -r src
webserver:
	java -jar $(PLOVR) soyweb --dir .
