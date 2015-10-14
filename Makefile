PLOVR_VERSION=2.0.0
PLOVR=plovr.jar

.PHONY: all plovr build serve lint webserver

all: build
plovr: $(PLOVR)
build: build/kt.js build/index.html build/upload.html
serve:
	java -jar $(PLOVR) serve *.json
build/%.js: %.json
	mkdir -p build
	java -jar $(PLOVR) build $< > $@
$(PLOVR):
	wget -q --no-check-certificate https://registry.npmjs.org/plovr/-/plovr-$(PLOVR_VERSION).tgz
	tar -xOzf plovr-$(PLOVR_VERSION).tgz package/bin/plovr.jar > $(PLOVR)
	rm plovr-$(PLOVR_VERSION).tgz
build/%.html: demo/%.html
	cp $< $@
	sed -i 's#http://localhost:9810/compile?id=kt-debug#kt.js#g' $@
lint:
	fixjsstyle --strict -r src
	gjslint --strict -r src
webserver:
	java -jar $(PLOVR) soyweb --dir .
