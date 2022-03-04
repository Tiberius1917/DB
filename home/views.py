from django.shortcuts import render
from django.views import View


class Home(View):
    template = 'home/home.html'

    def get(self, request):
        return render(request, self.template)


class About(View):
    template = 'about/about.html'

    def get(self, request):
        return render(request, self.template)
