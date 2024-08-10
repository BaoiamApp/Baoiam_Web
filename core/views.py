from django.contrib import messages
from django.shortcuts import render
from django.shortcuts import render, redirect
from social_django.models import UserSocialAuth
from django.contrib.auth.models import User
from core.forms import AccessForm
from course.models import CourseCategory, Course
from django.contrib.auth import authenticate, login, logout
from .models import GetInTouch
from .forms import GetInTouchForm
from userauths.models import Dashboard_User


def index(request):
    categories = CourseCategory.objects.all()
    courses_by_category = {cat: Course.objects.filter(category=cat, status='active') for cat in categories}
    print("courses by category ", courses_by_category)
    for category, courses in courses_by_category.items():
      for course in courses:
        print(f"Course Title: {course.title}")
        
    user = request.user
    if request.user.is_authenticated:
        auser = User.objects.get(username=user)  
        if not Dashboard_User.objects.filter(user_id=auser.id).exists():
            dashboard_user, created = Dashboard_User.objects.get_or_create(user=auser)
            dashboard_user.save()
        dash_user = Dashboard_User.objects.get(user_id=auser.id)
        photo = dash_user.photo
        return render(request, 'index.html',{'is_index_page': True, 'categories': categories, 'courses_by_category': courses_by_category, 'user':user, 'photo':photo})
    else:
        return render(request, 'index.html',{'is_index_page': True, 'categories': categories, 'courses_by_category': courses_by_category, 'user':user})


def career(request):
    categories = CourseCategory.objects.all()
    user = request.user
    if request.user.is_authenticated:
        auser = User.objects.get(username=user)  
        dash_user = Dashboard_User.objects.get(user_id=auser.id)
        photo = dash_user.photo
        return render(request, 'career.html',{'is_career': True, 'categories': categories, 'photo':photo})
    return render(request, 'career.html',{'is_career': True, 'categories': categories})


def hire_from_us(request):
    categories = CourseCategory.objects.all()
    user = request.user
    if request.user.is_authenticated:
        auser = User.objects.get(username=user)  
        dash_user = Dashboard_User.objects.get(user_id=auser.id)
        photo = dash_user.photo
        return render(request, 'hire_from_us.html',{'is_hire': True, 'categories': categories, 'photo':photo})
    return render(request, 'hire_from_us.html',{'is_hire': True, 'categories': categories})


def itie(request):
    categories = CourseCategory.objects.all()
    return render(request, 'ITIE.html',{'is_itie': True, 'categories': categories})


def wep(request):
    categories = CourseCategory.objects.all()
    return render(request, 'wep.html',{'is_wep': True, 'categories': categories})


def blog(request):
    categories = CourseCategory.objects.all()
    return render(request, 'blog.html',{'is_blog': True, 'categories': categories})


def blog_details(request):
    categories = CourseCategory.objects.all()
    return render(request, 'blog_details.html', {'is_blog_details': True, 'categories': categories})


def pap(request):
    categories = CourseCategory.objects.all()
    user = request.user
    if request.user.is_authenticated:
        auser = User.objects.get(username=user)  
        dash_user = Dashboard_User.objects.get(user_id=auser.id)
        photo = dash_user.photo
        return render(request, 'pap.html',{'is_pap': True, 'categories': categories,'photo':photo})
    return render(request, 'pap.html',{'is_pap': True, 'categories': categories})


def refer_earn(request):
    categories = CourseCategory.objects.all()
    user = request.user
    if request.user.is_authenticated:
        auser = User.objects.get(username=user)  
        dash_user = Dashboard_User.objects.get(user_id=auser.id)
        photo = dash_user.photo
        return render(request, 'referEarn.html',{'is_refer': True, 'categories': categories,'photo':photo})
    return render(request, 'referEarn.html',{'is_refer': True, 'categories': categories})


def maintenance_page(request):
    return render(request, 'maintenance_break.html')


def coming_soon(request):
    return render(request, 'coming_soon.html')


def locked_page(request):
    # form =  AccessForm()
    # return render(request, 'maintenance_locked.html', {'form': form})
    pass
  

def course(request):
    categories = CourseCategory.objects.all()
    return render(request, 'course.html', {'is_courses': True, 'categories': categories})
    

def get_in_touch(request):
    if request.method == 'POST':
        form = GetInTouchForm(request.POST)
        if form.is_valid():
            phone_number = form.cleaned_data['phone_number']
            # Save the data to the GetInTouch model
            GetInTouch.objects.create(phone_number=phone_number)
            return redirect('/')  # Redirect to a success page
    else:
        form = GetInTouchForm()
    return render(request, 'footer.html', {'form': form})