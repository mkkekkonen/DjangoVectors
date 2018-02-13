from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Page, Category

# Create your views here.

def page(request, url):
    category_list = Category.objects.all()
    page_list = Page.objects.order_by('date_added')
    page = Page.objects.get(url=url)
    page_template_url = "vectors/pages/" + url + ".html"
    legend_template_url = "vectors/legends/" + url + "_legend.html"
    context = {
        'category_list' : category_list,
        'page_list' : page_list,
        'page' : page,
        'page_template_url' : page_template_url,
        'legend_template_url': legend_template_url
    }
    return render(request, 'vectors/page.html', context)