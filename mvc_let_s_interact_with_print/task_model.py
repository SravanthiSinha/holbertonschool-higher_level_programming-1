class TaskModel():
	def __init__(self, title):
		if len(title) < 1 or type(title) != str:
			raise Exception("title is not a string")

		self.__title = title
		self.__callback_title = None

	def __str__(self):
		return self.__title

	def set_callback_title(self, value):
		self.__callback_title = value

	def get_title(self):
		return self.__title

	def toggle(self):
		self.__title = self.__title[::-1]

		if self.__callback_title:
			self.__callback_title(self.__title)
