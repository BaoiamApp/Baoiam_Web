from course.models import CourseCategory, Course

def categories_processor(request):
    categories = CourseCategory.objects.all()
    courses_by_category = {cat: Course.objects.filter(category=cat, status='active') for cat in categories}
    print("courses by category ", courses_by_category)
    return {'courses_by_category': courses_by_category}   